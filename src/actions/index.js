import { fetchCustomersApi } from '../api';
import * as TYPES from './../constants/ActionTypes';

/**
 * Action to trigger fetching of customers list. It dispatches `CUSTOMERS_FETCH_INIT`,
 * `CUSTOMERS_FETCH_SUCCESS` and `CUSTOMERS_FETCH_ERROR` actions to Redux.
 */
export const fetchCustomers = () => dispatch => {
  dispatch({ type: TYPES.CUSTOMERS_FETCH_INIT });

  return fetchCustomersApi()
    .then(res => res.text())
    .then(data => {
      dispatch({
        type: TYPES.CUSTOMERS_FETCH_SUCCESS,
        data
      });
    })
    .catch(error => {
      dispatch({ type: TYPES.CUSTOMERS_FETCH_ERROR, error });
    });
};