/* This file contains code that interacts with NMS Origins (https://nmorigins.com)
 * It may contain developer APIs that aren't intended for use by others.
 * Before using these APIs in your own applications, please check with those guys.
 * (They don't bite, I promise)
 */
import helper from './helper';

var baseURL = 'https://dev.nmsorigins.com';

function find(query, limit = 5) {
  return new Promise((resolve, reject) => {
    helper
      ._request('post', `${baseURL}/discoveries/find`, {
        limit,
        query
      }, {
        'content-type': 'application/json'
      })
      .then(JSON.parse)
      .then(resolve, reject);
  });
}

export default {
  find,
  baseURL
};
