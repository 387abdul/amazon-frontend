import React from 'react'
import './Topbooks.css'
import Slider from "react-slick";


const Topbook = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <>
     <div className="topsellercard mt-4">
          <div className="container-fluid p-3 bg-white h-50 whitecard">
            <h4 className='pt-3 text-black fs-4'>Top Sellers in Books for you</h4>
              <div className="row p-2 justify-content-around slider-container">
              <Slider {...settings}>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/81HPzTcmpQL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71a+hZFFEFL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71Tbq4LrGGL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/61p0Q0HeSZL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/617SuGGVMCL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/515SEhZtoYL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71EoTV4Y3OL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/81CnvOG8+YL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71e6qLrYVdL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71TF+czspmL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col-1 imagesss">
                  <img src="https://m.media-amazon.com/images/I/71lbUj0Mz5L._AC_SY200_.jpg" alt=""/>
                </div>
              </Slider>  
              </div>
          </div>
      </div>  
    </>
  )
}

export default Topbook
