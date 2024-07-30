import React from "react";
import "./Navmenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navmenu = () => {
  return (
    <>
      <div className="navmenu">
        <div className="firstlink">
          <div className="col-lg-2-sm-1 handburgericon fi ">
            <MenuIcon sx={{ fontSize: "34px" }} />
            <div className="allnavbarmenu">All</div>
          </div>

          <div className=" col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Today's Deals</div>
            <ArrowDropDownIcon sr={{ fontSize: "10px" }} className="dropdown" />
          </div>

          <div className="col-lg-2-sm-1  handburgericon meow">
            <div className="allnavbarmenu">Buy Again</div>
          </div>

          <div className="col-lg-2-sm-1  handburgericon meow">
            <div className="allnavbarmenu">Sell</div>
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Abdul's Amazon.com</div>
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Customer Service</div>
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Gift Card's</div>
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Browsing History</div>
            <ArrowDropDownIcon sr={{ fontSize: "10px" }} className="dropdown" />
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Amazon Home</div>
          </div>

          <div className="col-lg-2-sm-1 handburgericon meow">
            <div className="allnavbarmenu">Registry</div>
          </div>
           {/* hello I am a commmond */}
           <div className="col-lg-2-sm-1 handburgericon hell">
            <div className="allnavbarmenu">Groceies</div>
          </div>
          <div className="col-lg-2-sm-1 handburgericon hell">
            <div className="allnavbarmenu">Medical Care</div>
          </div>
          <div className="col-lg-2-sm-1 handburgericon hell">
            <div className="allnavbarmenu">Amazon Basic</div>
          </div>
          <div className="col-lg-2-sm-1 handburgericon hell">
            <div className="allnavbarmenu">Subscribe</div>
          </div>
        </div>       
      </div>
    </>
  );
};

export default Navmenu;
