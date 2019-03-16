// Convert degree to radians;
const _degToRad = deg => deg * Math.PI / 180;

/**
 * Calculate and return the distance between two points on earth using
 * Haversine formula https://en.wikipedia.org/wiki/Great-circle_distance 
 * The radius of the earth is considered 6371 km. (Must have changed now,
 * Global warming!)
 * @param {string | number} destLat (The destination latitude point)
 * @param {string | number} destLon (The destination longitude point)
 * @param {string | number} sourceLat (The source latitude point)
 * @param {string | number} sourceLon (The source longitude point)
 * All the params are mandatory
 */
export const calculateGreatestCircleDistance = (
  destLat, destLon, sourceLat, sourceLon
) => {

  if (!(destLat && destLon && sourceLat && sourceLon)) {
    throw new Error('source or destination coordinates not provided');
  }
  
  const EARTH_RADIUS = 6371; // km
  const absLatDistance = sourceLat - destLat;
  const latRad = _degToRad(absLatDistance);
  const abdLonDistance = sourceLon - destLon;
  const lonRad = _degToRad(abdLonDistance);

  const a = Math.sin(latRad / 2) * Math.sin(latRad / 2) +
    Math.cos(_degToRad(destLat)) * Math.cos(_degToRad(sourceLat)) *
    Math.sin(lonRad / 2) * Math.sin(lonRad / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = EARTH_RADIUS * c;

  return d;
}

/**
 * 
 * @param {Array} array 
 * @param {String} byField 
 * @param {Number} inOrder 1 denotes the ascending order and -1 denotes the descending order.
 * If no order is passed, default order of ascending is considered.
 */
export const sortArray = (
  array, byField, inOrder = 1
) => {
  if (inOrder !== 1 || inOrder !== -1) {
    inOrder = 1
  }
  
  return array.sort((a, b) => (a[byField] > b[byField]) ? inOrder : ((b[byField] > a[byField]) ? -inOrder : 0))
}
;