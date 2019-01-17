import {
    Button,
    Dropdown,
} from '@openware/components';
import countries = require('country-list');
import * as React from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
} from 'react-redux';
import { RootState } from '../../modules';
import {
    selectSendIdentityError,
    selectSendIdentitySuccess,
    sendIdentity,
} from '../../modules/kyc/identity';
import { CommonError } from '../../modules/types';
import { nationalities } from './nationalities';

interface ReduxProps {
    error?: CommonError;
    success?: string;
}

interface DispatchProps {
    sendIdentity: typeof sendIdentity;
}

interface OnChangeEvent {
    target: {
        value: string;
    };
}

interface IdentityState {
    city: string;
    countryOfBirth: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    nationality: string;
    postcode: string;
    residentialAddress: string;
}

type Props = ReduxProps & DispatchProps;

class IdentityComponent extends React.Component<Props, IdentityState> {
    public state = {
        city: '',
        countryOfBirth: '',
        dateOfBirth: '',
        firstName: '',
        lastName: '',
        nationality: '',
        postcode: '',
        residentialAddress: '',
    };

    public componentDidMount() {
        this.setState({
          countryOfBirth: countries().getCodes()[0],
          nationality: nationalities[0],
        });
    }

    public render() {
        const {
            city,
            dateOfBirth,
            firstName,
            lastName,
            postcode,
            residentialAddress,
        } = this.state;
        const { error, success } = this.props;

        const dataNationalities = nationalities;
        const onSelectNationality = value => this.selectNationality(dataNationalities[value]);

        const dataCountries = countries().getNames();
        const onSelectCountry = value => this.selectCountry(dataCountries[value]);

        return (
          <div className="pg-confirm__content-identity">
              <div className="pg-confirm__content-identity-col">
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          First Name
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="First Name"
                              value={firstName}
                              onChange={this.handleChange('firstName')}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Last Name
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="Last Name"
                              value={lastName}
                              onChange={this.handleChange('lastName')}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Nationality
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <Dropdown
                              className="pg-confirm__content-documents-col-row-content-number"
                              list={dataNationalities}
                              onSelect={onSelectNationality}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Date of Birth
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="Date of Birth"
                              value={dateOfBirth}
                              onChange={this.handleChange('dateOfBirth')}
                          />
                      </div>
                  </div>
              </div>
              <div className="pg-confirm__content-identity-col">
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Country of Birth
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <Dropdown
                              className="pg-confirm__content-documents-col-row-content-number"
                              list={dataCountries}
                              onSelect={onSelectCountry}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Residential Address
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="Residential Address"
                              value={residentialAddress}
                              onChange={this.handleChange('residentialAddress')}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          City
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="City"
                              value={city}
                              onChange={this.handleChange('city')}
                          />
                      </div>
                  </div>
                  <div className="pg-confirm__content-identity-col-row">
                      <div className="pg-confirm__content-identity-col-row-text">
                          Postcode
                      </div>
                      <div className="pg-confirm__content-identity-col-row-content">
                          <input
                              className="pg-confirm__content-identity-col-row-content-number"
                              type="string"
                              placeholder="Postcode"
                              value={postcode}
                              onChange={this.handleChange('postcode')}
                          />
                      </div>
                  </div>
              </div>
              {success && <p className="pg-confirm__success">{success}</p>}
              {error && <p className="pg-confirm__error">{error.message}</p>}
              <div className="pg-confirm__content-deep">
                  <Button
                      className="pg-confirm__content-phone-deep-button"
                      label="Next"
                      onClick={this.sendData}
                  />
              </div>
          </div>
        );
    }

    private handleChange = (key: string) => {
        return (e: OnChangeEvent) => {
            // @ts-ignore
            this.setState({
                [key]: e.target.value,
            });
        };
    };

    private selectNationality = (value: string) => {
        this.setState({
            nationality: value,
        });
    };

    private selectCountry = (value: string) => {
        this.setState({
            countryOfBirth: countries().getCode(value),
        });
    };

    private sendData = () => {
        const profileInfo = {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          dob: this.state.dateOfBirth,
          address: this.state.residentialAddress,
          postcode: this.state.postcode,
          city: this.state.city,
          country: this.state.countryOfBirth,
        };
        this.props.sendIdentity(profileInfo);
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    error: selectSendIdentityError(state),
    success: selectSendIdentitySuccess(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        sendIdentity: payload => dispatch(sendIdentity(payload)),
    });

// tslint:disable-next-line
export const Identity = connect(mapStateToProps, mapDispatchProps)(IdentityComponent) as any;
