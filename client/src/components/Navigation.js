import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { MdLibraryAdd, MdPermDeviceInformation } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";

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

      <div className="nav-item-easy">
        <NavLink to="/dashboard/report" className="text-white text-decoration-none">
          <AiOutlineAreaChart />
          <p>Report</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/info" className="text-white text-decoration-none">
          <MdPermDeviceInformation />
          <p>Information</p>
        </NavLink>
      </div>

    </div>

  </div>
);

export default Navigation;