import { DEFAULT_API_ERROR_MESSAGE } from './../constants/States';
import { CUSTOMERS_FETCH_API } from './../constants';

/**
 * API to fetch the customers list.
 * If the response is not 200(ok), throw an error with the message. Else, return the response.
 */
export const fetchCustomersApi = () => 
  fetch(CUSTOMERS_FETCH_API)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText || DEFAULT_API_ERROR_MESSAGE);
      }

      return res;
    })
    ;
