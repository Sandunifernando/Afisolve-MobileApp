import axios from 'axios';
import {hostName} from '../constants/constants';

export const login = (email, password) => {
  return axios.post(hostName + '/authentication/login', {
    email: email,
    password: password,
  });
};
