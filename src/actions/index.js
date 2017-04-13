import axios from 'axios';

// define action type
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=tmhpe1234321';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    // redux-promise will unwrapp the promise and the data will flow throughall of our reducers
    payload: request
  };
}
