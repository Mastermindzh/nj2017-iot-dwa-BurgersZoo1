import axios from 'axios';

import * as ENDPOINTS from './../constants/endpoint-constants';
import {FILEUPLOAD_ACTION_TYPES} from "../constants/actionTypes";
import initialState from "../reducers/fileupload/initialState"

export function uploadSound(beschrijving, files) {
  let formData = new FormData();
  formData.append("images", files);
  return (dispatch => {
    dispatch({type: FILEUPLOAD_ACTION_TYPES.SET_UPLOAD_STATUS, payload: FILEUPLOAD_ACTION_TYPES.UPLOAD_STATUS_PENDING})
    axios.post(ENDPOINTS.UPLOAD.POST, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(result => {
      dispatch({
        type: FILEUPLOAD_ACTION_TYPES.SET_UPLOAD_STATUS,
        payload: FILEUPLOAD_ACTION_TYPES.UPLOAD_STATUS_SUCCESS
      });
      dispatch({type: FILEUPLOAD_ACTION_TYPES.ADD_FILE, payload: {files: result.data, beschrijving: beschrijving}})
    }).catch(error => {
      console.log(error);
      dispatch({type: FILEUPLOAD_ACTION_TYPES.SET_UPLOAD_STATUS, payload: FILEUPLOAD_ACTION_TYPES.UPLOAD_STATUS_ERROR})

    });
  })
}

export function setUploadStateEmpty() {
  return (dispatch => {
    dispatch({type: FILEUPLOAD_ACTION_TYPES.SET_EMPTY_STATE, payload: initialState})
  })
}
