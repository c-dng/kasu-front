import axios from 'axios';

export default axios.create(
  {
    baseURL: 'https://api.kasu.laetitia-dev.com/',
  },
);
