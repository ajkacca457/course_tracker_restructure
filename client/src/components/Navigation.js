import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="easynav">
    <div className="navcont text-white bg-dark">

      <div className="nav-item-easy">
        <NavLink to="/dashboard" className="text-white">
          <i className="fas fa-home" />
          <p>Home</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/add-course" className="text-white">
          <i className="fas fa-plus-circle" />
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