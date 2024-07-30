import React from "react";
import "./Navbar.css";
import amazonLogo from "../../../assets/images/navimages/amazonLogo.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import america from "../../../assets/images/navimages/america.webp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
      <div className="navbar1">
        <div className="navbarlefts">
        <div className="handburgericon1">
            <MenuIcon sx={{ fontSize: "34px" }}/> 
          </div>
          <div className="navbarleftlogo">
            <img src={amazonLogo} alt="amazonLogo" width={100} />
          </div>

          <div className="navbarlocation">
            <div className="navbarlocationimg">
              <PlaceOutlinedIcon
                className="navbarlocationimgicon"
                sx={{ fontSize: "20px" }}
              />
            </div>
            <div className="navbardeliveryplace">
              <div className="navbardeliverytop">
                Delivery to washington 20001
              </div>
              <div className="navbardeliverybottom">Update Location</div>
            </div>
          </div>  
          <div className="navbarcenters">
            <div className="navbarcentersearch">
              <div className="navbarcenterall">
                <div className="navbarcenteralltext">All</div>
                <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
              </div>
              <input
                type="text"
                className="navbarcentersearchbox"
                placeholder="Search Amazon"
              />
              <div className="navbarcentersearchicon">
                <SearchIcon
                  sx={{ fontSize: "26px" }}
                  className="navbarsearchimgicon"
                />
              </div>
            </div>
          </div>
          <div className="navbarright">
            <div className="americaflagcode">
              <img src={america} className="america" />
              <div className="americacode">
                EN{" "}
                <ArrowDropDownIcon
                  sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
                  className="langagedropdown"
                />
              </div>
            </div>

            <div className="loginsection">
              <div className="uername">Hello,User</div>
              <div className="americacode">Account & Lists</div>
            </div>

            <div className="loginsection">
              <div className="uername">Return</div>
              <div className="americacode">& Oders</div>
            </div>
            
            <div className="loginsection cart">
              <span className="cartitem"></span>
              <div className="username"><ShoppingCartOutlinedIcon /> <span className="cartTitle">Cart</span></div>
            </div>
          </div>
        </div>
        <div className="navbarcenters1">
            <div className="navbarcentersearch">
              <div className="navbarcenterall">
                <div className="navbarcenteralltext">All</div>
                <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
              </div>
              <input
                type="text"
                className="navbarcentersearchbox"
                placeholder="Search Amazon"
              />
              <div className="navbarcentersearchicon">
                <SearchIcon
                  sx={{ fontSize: "26px" }}
                  className="navbarsearchimgicon"
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
