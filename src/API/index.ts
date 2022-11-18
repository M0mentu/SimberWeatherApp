import axios from 'axios';
import {API_URL} from 'src/Utils/Constants';

export default axios.create({
  withCredentials: false,
  baseURL: API_URL,
});
