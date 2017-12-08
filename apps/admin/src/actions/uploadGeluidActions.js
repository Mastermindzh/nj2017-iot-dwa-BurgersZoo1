import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';

export function uploadSound(filename, file){
    // return stuff
    return axios.post(filename + file);
}
