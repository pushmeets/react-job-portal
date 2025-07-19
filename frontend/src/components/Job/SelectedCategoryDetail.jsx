import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getJobs } from "../../Redux/actions";

const SelectedCategoryDetail = () => {
  const allJobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  const { category } = useParams();
  const filteredJobs = allJobs.filter(
    (job) => job.category.toLowerCase() === category.toLowerCase()
  );
  return (
    <section className="jobs page">
      <div className="container">
        <h1>All {category} Jobs</h1>

        {loading ? (
          <>
            <h3>Loading...</h3>
          </>
        ) : (
          <>
            <div className="banner">
              {filteredJobs &&
                filteredJobs.map((element) => {
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

export default SelectedCategoryDetail;
