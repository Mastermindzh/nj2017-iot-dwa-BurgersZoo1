import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';

export function uploadSound(filename, files) {
  let formData = new FormData();
  formData.append("images", files);
  return axios.post(ENDPOINTS.UPLOAD.POST, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
