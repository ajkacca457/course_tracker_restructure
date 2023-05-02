import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { MdLibraryAdd } from "react-icons/md";

const Navigation = () => (
  <div className="easynav">
    <div className="navcont text-white bg-dark">

      <div className="nav-item-easy">
        <NavLink to="/dashboard" className="text-white text-decoration-none">
          <AiTwotoneHome />
          <p>Home</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/add-course" className="text-white text-decoration-none">
          <MdLibraryAdd />
          <p>Add Course</p>
        </NavLink>

      </div>

      {/* <div className="nav-item-easy">
        <NavLink to="/progress" className="text-white">
          <i className="fas fa-chart-pie" />
          <p>Report</p>
        </NavLink>
      </div> */}

    </div>

  </div>
);

export default Navigation;