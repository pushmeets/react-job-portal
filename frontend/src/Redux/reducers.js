import {
  GET_JOBS_FAILURE,
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  jobs: [],
  error: false,
  success: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case GET_JOBS_SUCCESS:
      return { ...state, loading: false, success: true, jobs: action.payload };
    case GET_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
