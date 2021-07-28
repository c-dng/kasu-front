import axios from 'axios';
import { UPDATE_USER, GET_USER_INFOS, saveUserInfos } from 'src/actions/user';

const axiosInstance = axios.create(
    {
      baseURL: 'https://api.kasu.laetitia-dev.com/',
    },
  );

const token = localStorage.getItem('token');
if(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const updateUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_INFOS: {
        const userId = store.getState().user.data.id;
        axiosInstance
            .get(`api/v1/user/${userId}`)
            .then(
                (response) => {
                console.log(response.data.contact);
                store.dispatch(saveUserInfos(response.data.contact));
                },
            );       
      next(action);
      break;
    }
    case UPDATE_USER: {
        const { zipCode, address, city, lastName, firstName, pseudo, email, password, holiday_mode } = store.getState().user;
        const userId = store.getState().user.data.id;
        axiosInstance
            .patch(`api/v1/user/${userId}/update`, { zipcode: zipCode, address, city, lastname: lastName, firstname: firstName, pseudo, email, password, holiday_mode })
            .then(
                (response) => {
                console.log(response.data);
                //store.dispatch(saveMessage(response.data));
                },
            );       
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default updateUser;
