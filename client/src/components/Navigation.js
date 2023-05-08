import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { MdLibraryAdd, MdPermDeviceInformation } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { GrLogout } from "react-icons/gr";


const Navigation = () => {

  const dispatch = useDispatch();

  const handlelogout = () => {
      dispatch(logoutUser());
  };

  return(

  <div className="easynav mx-4">
    <div className="navcont text-white bg-dark d-flex align-items-center gap-3">

      <div className="nav-item-easy">
        <NavLink to="/dashboard" className="text-white text-decoration-none d-flex align-items-center">
          <AiTwotoneHome />
          <p className='mb-0 px-1'>Home</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/add-course" className="text-white text-decoration-none d-flex align-items-center">
          <MdLibraryAdd />
          <p className='mb-0 px-1'>Add</p>
        </NavLink>

      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/report" className="text-white text-decoration-none d-flex align-items-center">
          <AiOutlineAreaChart />
          <p className='mb-0 px-1'>Report</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
        <NavLink to="/dashboard/info" className="text-white text-decoration-none d-flex align-items-center">
          <MdPermDeviceInformation />
          <p className='mb-0 px-1'>Information</p>
        </NavLink>
      </div>

      <div className="nav-item-easy">
            <button type="button" className="border-0 py-1 px-2 rounded btn btn-danger d-flex align-items-center gap-2" onClick={handlelogout}>
              <GrLogout/>
              {" "}
              <span className='text-white'>Logout</span>
            </button>
      </div>

    </div>

  </div>
)};

export default Navigation;