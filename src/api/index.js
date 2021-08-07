//  Using this file to define only once the axios instance.
//  This way, no need to re-set the localstorage token in every middleware files.

import axios from 'axios';

export default axios.create(
  {
    baseURL: 'https://api.kasu.laetitia-dev.com/',
  },
);
