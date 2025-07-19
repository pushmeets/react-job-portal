import React, { useEffect } from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  console.log(jobs);

  const handleClick = (category) => {
    navigate(`/jobs/${category}`);
    console.log(id);
  };

  const fetchEachCategory = [...new Set(jobs.map((ele) => ele.category))];

  // const categories = [
  //   {
  //     id: 1,
  //     title: "Graphics & Design",
  //     subTitle: "305 Open Positions",
  //     icon: <MdOutlineDesignServices />,
  //   },
  //   {
  //     id: 2,
  //     title: "Mobile App Development",
  //     subTitle: "500 Open Positions",
  //     icon: <TbAppsFilled />,
  //   },
  //   {
  //     id: 3,
  //     title: "Frontend Web Development",
  //     subTitle: "200 Open Positions",
  //     icon: <MdOutlineWebhook />,
  //   },
  //   {
  //     id: 4,
  //     title: "MERN STACK Development",
  //     subTitle: "1000+ Open Postions",
  //     icon: <FaReact />,
  //   },
  //   {
  //     id: 5,
  //     title: "Account & Finance",
  //     subTitle: "150 Open Positions",
  //     icon: <MdAccountBalance />,
  //   },
  //   {
  //     id: 6,
  //     title: "Artificial Intelligence",
  //     subTitle: "867 Open Positions",
  //     icon: <GiArtificialIntelligence />,
  //   },
  //   {
  //     id: 7,
  //     title: "Video Animation",
  //     subTitle: "50 Open Positions",
  //     icon: <MdOutlineAnimation />,
  //   },
  //   {
  //     id: 8,
  //     title: "Game Development",
  //     subTitle: "80 Open Positions",
  //     icon: <IoGameController />,
  //   },
  // ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {fetchEachCategory.map((element) => {
          return (
            <div
              className="card"
              key={element.id}
              onClick={() => {
                handleClick(element);
              }}
            >
              <p>{element}</p>
              {/* <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.subTitle}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
