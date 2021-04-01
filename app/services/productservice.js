import axios from 'axios';
import {hostName} from '../constants/constants';

export const showProduct = () => {
    return axios.post(hostName + '/customer/get-all-products', {


    });
};
