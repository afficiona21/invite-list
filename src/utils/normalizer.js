import { calculateGreatestCircleDistance, sortArray } from './lib';

import { 
  ACCEPTABLE_DISTANCE_FROM_OFFICE,
  INTERCOM_OFFICE_LOCATION_LAT,
  INTERCOM_OFFICE_LOCATION_LON
 } from './../constants/States';

/**
 * Contacts list normalizer
 * @param {string} rawData
 * This function takes the raw data of the customers and returns the formatted data
 * to be used in the app.
 * The raw data has to be in string format. Otherwise, nothing to show.
 * The raw data is split in lines. An array stores each record
 * and parses each item to JSON objects. The records are then filtered with the items
 * which are withing { ACCEPTABLE_DISTANCE_FROM_OFFICE } of the distance from the office.
 * The filtered records are then sorted in ascending order of user_id and finally returned.
 */
export const normalizeCustomersList = rawData => {

  if (!rawData || typeof rawData !== 'string') {
    //Or parser for the raw data as per the data format and set it in records.
    // For eg, if the raw data is json, do not split the data and do not parse each item.
    return [];
  }

  const recordsSplitByLine = rawData.split('\n');
  // Parse each item to JSON
  let records = recordsSplitByLine.map(item => JSON.parse(item));

  // Filter
  records = records.filter(item => {
    item.distance = calculateGreatestCircleDistance(
      item.latitude, item.longitude, INTERCOM_OFFICE_LOCATION_LAT, INTERCOM_OFFICE_LOCATION_LON
    );
    return item.distance <= ACCEPTABLE_DISTANCE_FROM_OFFICE;
  });

  // Sort
  sortArray(records, 'user_id');
  
  return records;
};
