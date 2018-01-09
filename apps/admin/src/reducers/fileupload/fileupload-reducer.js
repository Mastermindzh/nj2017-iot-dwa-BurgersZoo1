import initialState from './initialState';
import {FILEUPLOAD_ACTION_TYPES} from './../../constants/actionTypes';

export default function fileUploadReducer(state = initialState, action) {
  switch (action.type) {
    case FILEUPLOAD_ACTION_TYPES.SET_UPLOAD_STATUS:
      return {...state, uploadStatus: action.payload};

    case FILEUPLOAD_ACTION_TYPES.ADD_FILE:
      return {...state, files: action.payload};

    case FILEUPLOAD_ACTION_TYPES.SET_EMPTY_STATE:
      return {...state, files: action.payload.files, uploadStatus: action.payload.uploadStatus};

    default:
      return state;

  }


}
