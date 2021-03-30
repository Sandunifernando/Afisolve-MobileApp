import axios from 'axios';
import {hostName} from '../constants/constants';

export const complaintSubmission = (productID,complaintSubject,description) => {
    return axios.post(hostName + '/customer/lodge-complaint', {
        productID: productID,
        complaintSubject: complaintSubject,
        description : description,
    });
};
