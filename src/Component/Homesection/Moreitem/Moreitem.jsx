import React from 'react'
import Slider from "react-slick";


const Moreitem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <>
      <div className="topsellercard">
          <div className="container-fluid p-3  bg-white h-50 whitecard">
            <h2 className='pt-3 text-black '>More items to consider <span className='fs-6'>See more</span> </h2>
              <div className="row pt-2 g-0 slider-container">
              <Slider {...settings}>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71Z6SQtqdaL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/91c1LACHLaL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/710+-T1ESAL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71jlfiJJnrL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/51fiJ7QI4aL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71B02KeFSDL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71wpAxXAxwL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/610U5-keRtL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/710VUG9LriL._AC_SY200_.jpg" alt=""/>
                </div>
                </Slider>
              </div>
          </div>
      </div>
        {/* ------------------------------------------------------------------------------------------- */}
        <div className="topsellercard mt-5">
          <div className="container-fluid p-3  bg-white h-50 whitecard">
            <h4 className='pt-3 text-black '>Best Sellers in Clothing, Shoes & Jewelry </h4>
              <div className="row pt-2 g-0 slider-container">
              <Slider {...settings}>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71OSc6IfGcL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/710o0VupScL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71uXpzMg5PL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/41ztSsz3QdL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71ZtR65CG3L._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/41iWogJnZQL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/714HzpXvWYL._AC_SY200_.jpg" alt=""/>
                </div>
                <div className="col imagesss">
                  <img src="https://m.media-amazon.com/images/I/516tnauVb+L._AC_SY200_.jpg" alt=""/>
                </div>
              </Slider>  
              </div>
          </div>
      </div> 
            {/* <Slider {...settings}>
        <div>
        <img src="https://m.media-amazon.com/images/I/71Z6SQtqdaL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/51fiJ7QI4aL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
        <div>
        <img src="https://m.media-amazon.com/images/I/71DHHCMs1jL._AC_SY200_.jpg" alt=""/>
        </div>
      </Slider> */}
    </>
  )
}

export default Moreitem
