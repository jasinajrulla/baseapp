import { Market } from '../markets';
import { CommonError } from '../types';
import {
    FEES_DATA,
    FEES_ERROR,
    FEES_FETCH,
    ORDER_CANCEL_DATA,
    ORDER_CANCEL_ERROR,
    ORDER_CANCEL_FETCH,
    ORDER_EXECUTE_DATA,
    ORDER_EXECUTE_ERROR,
    ORDER_EXECUTE_FETCH,
    ORDERS_DATA,
    ORDERS_ERROR,
    ORDERS_FETCH,
    USER_ORDERS_DATA,
    USER_ORDERS_ERROR,
    USER_ORDERS_FETCH,
} from './constants';
import {
    DefaultFee,
    GroupedOrders,
    Order,
    OrderSide,
} from './types';

export interface OrdersFetch {
    type: typeof ORDERS_FETCH;
    payload: {
        market: string;
    };
}

export interface OrdersData {
    type: typeof ORDERS_DATA;
    payload: GroupedOrders;
}

export interface OrdersError {
    type: typeof ORDERS_ERROR;
    payload: CommonError;
}

export interface OrderCancelFetch {
    type: typeof ORDER_CANCEL_FETCH;
    payload: {
        id: string | number;
    };
}

export interface OrderCancelData {
    type: typeof ORDER_CANCEL_DATA;
    payload: {
        id: string | number;
    };
}

export interface OrderCancelError {
    type: typeof ORDER_CANCEL_ERROR;
    payload: CommonError;
}

export interface OrderExecution {
    market: string;
    side: OrderSide;
    volume: string;
    price?: string;
    ord_type?: string;
}

export interface OrderExecuteFetch {
    type: typeof ORDER_EXECUTE_FETCH;
    payload: OrderExecution;
}

export interface OrderExecuteData {
    type: typeof ORDER_EXECUTE_DATA;
    payload: Order;
}

export interface OrderExecuteError {
    type: typeof ORDER_EXECUTE_ERROR;
    payload: CommonError;
}

export interface FeesFetch {
    type: typeof FEES_FETCH;
}

export interface FeesData {
    type: typeof FEES_DATA;
    payload: DefaultFee[];
}

export interface FeesError {
    type: typeof FEES_ERROR;
    payload: CommonError;
}

export interface UserOrdersFetch {
    type: typeof USER_ORDERS_FETCH;
    payload: Market[];
}

export interface UserOrdersData {
    type: typeof USER_ORDERS_DATA;
    payload: GroupedOrders;
}

export interface UserOrdersError {
    type: typeof USER_ORDERS_ERROR;
    payload: CommonError;
}

export type OrdersAction = OrdersFetch
    | OrdersData
    | OrdersError
    | OrderCancelFetch
    | OrderCancelData
    | OrderCancelError
    | OrderExecuteFetch
    | OrderExecuteData
    | OrderExecuteError
    | FeesFetch
    | FeesData
    | FeesError
    | UserOrdersFetch
    | UserOrdersData
    | UserOrdersError;

export const ordersFetch = (payload: OrdersFetch['payload']): OrdersFetch => ({
    type: ORDERS_FETCH,
    payload,
});

export const ordersData = (payload: OrdersData['payload']): OrdersData => ({
    type: ORDERS_DATA,
    payload,
});

export const ordersError = (payload: OrdersError['payload']): OrdersError => ({
    type: ORDERS_ERROR,
    payload,
});

export const orderCancelFetch =
    (payload: OrderCancelFetch['payload']): OrderCancelFetch => ({
        type: ORDER_CANCEL_FETCH,
        payload,
    });

export const orderCancelData =
    (payload: OrderCancelData['payload']): OrderCancelData => ({
        type: ORDER_CANCEL_DATA,
        payload,
    });

export const orderCancelError =
    (payload: OrderCancelError['payload']): OrderCancelError => ({
        type: ORDER_CANCEL_ERROR,
        payload,
    });

export const orderExecuteFetch =
    (payload: OrderExecuteFetch['payload']): OrderExecuteFetch => ({
        type: ORDER_EXECUTE_FETCH,
        payload,
    });

export const orderExecuteData = (payload: OrderExecuteData['payload']): OrderExecuteData => ({
    type: ORDER_EXECUTE_DATA,
    payload,
});

export const orderExecuteError =
    (payload: OrderExecuteError['payload']): OrderExecuteError => ({
        type: ORDER_EXECUTE_ERROR,
        payload,
    });

export const feesFetch = (): FeesFetch => ({
    type: FEES_FETCH,
});

export const feesData = (payload: FeesData['payload']): FeesData => ({
    type: FEES_DATA,
    payload,
});

export const feesError = (payload: FeesError['payload']): FeesError => ({
    type: FEES_ERROR,
    payload,
});

export const userOrdersFetch =
    (payload: UserOrdersFetch['payload']): UserOrdersFetch => ({
        type: USER_ORDERS_FETCH,
        payload,
    });

export const userOrdersData = (payload: UserOrdersData['payload']): UserOrdersData => ({
    type: USER_ORDERS_DATA,
    payload,
});

export const userOrdersError =
    (payload: UserOrdersError['payload']): UserOrdersError => ({
        type: USER_ORDERS_ERROR,
        payload,
    });
