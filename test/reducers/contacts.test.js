import { fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../../src/reducers/Customers';
import * as TYPES from '../../src/constants/ActionTypes';

describe('Reducer: Customers', () => {
  it('FETCH CUSTOMERS INIT: ', () => {
    const action = {
      type: TYPES.CUSTOMERS_FETCH_INIT
    };

    const expectedState = fromJS({
      isFetching: true,
      error: null,
      data: null
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });

  it('FETCH CUSTOMERS SUCCESS: ', () => {
    const action = {
      type: TYPES.CUSTOMERS_FETCH_SUCCESS,
      data: `{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}
{"latitude": "53.74452", "user_id": 29, "name": "Oliver Ahearn", "longitude": "-7.11167"}`
    };

    const expectedState = fromJS({
      isFetching: false,
      error: null,
      data: [
        {
          user_id: 12,
          name: 'Christina McArdle',
          latitude: "52.986375",
          longitude: "-6.043701",
          distance: 41.7687255008362
        },
        {
          user_id: 29,
          name: 'Oliver Ahearn',
          latitude: "53.74452",
          longitude: "-7.11167",
          distance: 72.20178549704269
        }
      ]
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });

  it('FETCH CUSTOMERS ERROR: ', () => {
    const action = {
      type: TYPES.CUSTOMERS_FETCH_ERROR,
      error: { message: 'Something went wrong!' }
    };

    const expectedState = fromJS({
      isFetching: false,
      error: action.error.message,
      data: null
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });
});
