import axios from "axios";

export const GET_JOBS_REQUEST = "GET_JOBS_REQUEST";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_FAILURE = "GET_JOBS_FAILURE";

export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_JOBS_REQUEST });
    const res = await axios.get("http://localhost:4000/api/v1/job/getall");
    console.log("RESPONSE", res);
    dispatch({ type:GET_JOBS_SUCCESS, payload: res.data.jobs });
  } catch (error) {
    dispatch({ type: GET_JOBS_FAILURE, payload: error.message });
    console.log(error);
  }
};
