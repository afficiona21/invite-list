import { fromJS } from 'immutable';

import { normalizeCustomersList } from './../utils/normalizer';
import * as TYPES from './../constants/ActionTypes';

const initialState = fromJS({
  isFetching: true,
  error: null,
  data: null
});

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.CUSTOMERS_FETCH_INIT:
      return state.merge({
        isFetching: true,
        error: null,
        data: null
      });

    case TYPES.CUSTOMERS_FETCH_SUCCESS:
      return state.merge({
        isFetching: false,
        error: null,
        data: normalizeCustomersList(action.data),
      });

    case TYPES.CUSTOMERS_FETCH_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error.message,
        data: null
      });

    default:
      return state;
  }
}
