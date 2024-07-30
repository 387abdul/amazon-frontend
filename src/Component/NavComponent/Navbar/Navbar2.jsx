import React from "react";
import "./Navbar.css";
import amazonLogo from "../../../assets/images/navimages/amazonLogo.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="text-center">
      <div className="row bg-dark text-light h-60 gap">
        <div className="col-sm-1 py-2">
          <img
            src={amazonLogo}
            alt="amazonLogo"
            className="navbarleftlogo px-1 pt-1"
          />
        </div>
        <div className="col-sm-3 px-5 justify-content-end">
          <div className="row w-100 g-1 navbarlocation hover-effect">
            <div className="col-3 text-end pt-3">
              <PlaceOutlinedIcon
                className="navbarlocationimgicon"
                sx={{ fontSize: "26px" }}
              />
            </div>
            <div className="col-9 justify-content-start">
              <div className="d-flex flex-column py-1">
                <div className="navbardeliverytop text-start ">
                  Delivery to washington 20001
                </div>
                <div className="navbardeliverybottom text-start">
                  Update Location
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 navbarcentersearch">
          <div class="container text-center">
            <div class="row g-0">
              <div class="col-1 navbarcenterall">
                <span className="navbarcenteralltext">All</span>
                < ArrowDropDownIcon sx={{ fontSize: "20px"}}/>
              </div>
              <div class="col-10">
              <input type="text"  className='navbarcentersearchbox' placeholder='Search Amazon'/>
              </div>
              <div class="col-1 navbarcentersearchicon">
              <SearchIcon sx={{ fontSize:"26px" }} className='navbarsearchimgicon'/>

              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1">language</div>
        <div className="col-sm-1">login</div>
        <div className="col-sm-1">return</div>
        <div className="col-sm-1">card</div>
      </div>
    </div>
  );
};