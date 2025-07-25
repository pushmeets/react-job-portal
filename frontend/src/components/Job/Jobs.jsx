import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../Redux/actions";

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());

    if (!isAuthorized) {
      navigateTo("/");
    }
  }, [dispatch]);

  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   try {
  //     axios
  //       .get("http://localhost:4000/api/v1/job/getall", {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setJobs(res.data);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // if (!isAuthorized) {
  //   navigateTo("/");
  // }

  return (
    <section className="jobs page">
      <div className="container">
        <h1>ALL AVAILABLE JOBS</h1>

        {loading ? (
          <>
            <h3>Loading...</h3>
          </>
        ) : (
          <>
            <div className="banner">
              {jobs &&
                jobs.map((element) => {
                  return (
                    <div className="card" key={element._id}>
                      <p>{element.title}</p>
                      <p>{element.category}</p>
                      <p>{element.country}</p>
                      <Link to={`/job/${element._id}`}>Job Details</Link>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Jobs;
