import { createStore } from 'redux';
import { rootReducer } from '../';
import * as selectors from './selectors';


describe('Profile selectors', () => {
    const mockedStore = createStore(rootReducer).getState();

    it('should check selectUserLoggedIn selector', () => {
        const isLoggedIn = !mockedStore.app.profile.userData.isFetching && mockedStore.app.profile.userData.user.state === 'active';
        expect(selectors.selectUserLoggedIn(mockedStore)).toEqual(isLoggedIn);
    });

    it('should check selectUserInfo selector', () => {
        expect(selectors.selectUserInfo(mockedStore)).toEqual(mockedStore.app.profile.userData.user);
    });

    it('should check selectUserError selector', () => {
        expect(selectors.selectUserError(mockedStore)).toEqual(mockedStore.app.profile.userData.error);
    });

    it('should check selectUserFetching selector', () => {
        expect(selectors.selectUserFetching(mockedStore)).toEqual(mockedStore.app.profile.userData.isFetching);
    });

    it('should check selectChangePasswordError selector', () => {
        expect(selectors.selectChangePasswordError(mockedStore)).toEqual(mockedStore.app.profile.passwordChange.error);
    });

    it('should check selectChangePasswordSuccess selector', () => {
        expect(selectors.selectChangePasswordSuccess(mockedStore)).toEqual(mockedStore.app.profile.passwordChange.success);
    });

    it('should check selectTwoFactorAuthQR selector', () => {
        expect(selectors.selectTwoFactorAuthQR(mockedStore)).toEqual(mockedStore.app.profile.twoFactorAuth.url);
    });

    it('should check selectTwoFactorAuthBarcode selector', () => {
        expect(selectors.selectTwoFactorAuthBarcode(mockedStore)).toEqual(mockedStore.app.profile.twoFactorAuth.barcode);
    });

    it('should check selectTwoFactorAuthSuccess selector', () => {
        expect(selectors.selectTwoFactorAuthSuccess(mockedStore)).toEqual(mockedStore.app.profile.twoFactorAuth.success);
    });

    it('should check selectTwoFactorAuthError selector', () => {
        expect(selectors.selectTwoFactorAuthError(mockedStore)).toEqual(mockedStore.app.profile.twoFactorAuth.error);
    });
});
