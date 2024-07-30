import React from 'react'
import './Topselltoys.css'
import Slider from "react-slick";


const myimges = [
  {
    imgPath : "https://m.media-amazon.com/images/I/61YdAM+-V3L._AC_SY200_.jpg",
  },
  {
    imgPath : "https://m.media-amazon.com/images/I/51y7m0AYLVL._AC_SY200_.jpg",
  },
  {
    imgPath :"https://m.media-amazon.com/images/I/81JbRuzI4qL._AC_SY200_.jpg",
  },
  {
    imgPath : "https://m.media-amazon.com/images/I/81tsThAA6YL._AC_SY200_.jpg",
  },
  {
    imgPath : "https://m.media-amazon.com/images/I/71aNUMtmDXL._AC_SY200_.jpg",
  },
  {
    imgPath : "https://m.media-amazon.com/images/I/61q5658ph+L._AC_SY200_.jpg",
  }
]

const Topselltoys = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  // const arrayDataItems = myimges.map((imgPath) =>);
  return (
    <>
      <div className="topsellercard1">
          <div className="container-fluid p-3  bg-white h-50 whitecard">
            <h4 className='pt-3 text-black fs-4'>Top Sell in toys for you</h4>
              <div className="row pt-2 slider-container">
              <Slider {...settings}>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/61YdAM+-V3L._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/51y7m0AYLVL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/81JbRuzI4qL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/81tsThAA6YL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71aNUMtmDXL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/61q5658ph+L._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71Tqk2ilPXL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/715NMsD2LCL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71AgjurqzKL._AC_SY200_.jpg" alt=""/>
                </div>
              </Slider>  
              </div>
          </div>
      </div> 
    </>
  );
};

export default Topselltoys;
