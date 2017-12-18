import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';

export function uploadSound(filename, files) {
  // return stuff
  let formData = new FormData();
  formData.append("images", files);
  console.log("in upload sound");
  // todo voeg toe aan constants
  return axios.post(ENDPOINTS.UPLOAD.POST, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
