import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="productpage bg-white mt-4">
        <div className="har pt-3">
          <hr />
        </div>
        <div className="container-fluid">
          <div className="producttitle d-flex justify-content-between ">
            <h5 className="text-black ps-4">
              Customers who viewed items in your browsing history also viewed
            </h5>
            <span className="px-4 pagina">Page 1 of 8</span>
          </div>
          {/* cards */}
          {/* <div className="productcard px-5 pt-5">
            <div className="row g-6 py-5 row-cols-1 row-cols-lg-5 ">
              <div className="col-2 borr">
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/710+-T1ESAL._AC_UL165_SR165,165_.jpg"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body lh-sm px-1 g-0">
                    <p className="card-tite size">
                      My First Tackle Box Playset Plush and Board Book Curious
                      George Goes Fishing Set
                    </p>
                    <div class="small-ratings text-warning">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>

                    <p className="card-price">
                      <strong className="fs-5">$39.95</strong> <br />
                      <span className="fs-small">
                        Get it as soon as Sunday, Jul 28
                      </span>{" "}
                      <br />
                      <span className="freeshipp ">
                        FREE Shipping by Amazon
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2 borr">
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71jlfiJJnrL._AC_UL165_SR165,165_.jpg"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body lh-sm px-1 g-0">
                    <p className="card-tite size">
                      My First Tackle Box Playset Plush and Board Book Curious
                      George Goes Fishing Set
                    </p>
                    <div class="small-ratings text-warning">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>

                    <p className="card-price">
                      <strong className="fs-5">$39.95</strong> <br />
                      <span className="fs-small">
                        Get it as soon as Sunday, Jul 28
                      </span>{" "}
                      <br />
                      <span className="freeshipp ">
                        FREE Shipping by Amazon
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-2 borr">
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/51fiJ7QI4aL._AC_UL165_SR165,165_.jpg"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body lh-sm px-1 g-0">
                    <p className="card-tite size">
                      My First Tackle Box Playset Plush and Board Book Curious
                      George Goes Fishing Set
                    </p>
                    <div class="small-ratings text-warning">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>

                    <p className="card-price">
                      <strong className="fs-5">$39.95</strong> <br />
                      <span className="fs-small">
                        Get it as soon as Sunday, Jul 28
                      </span>{" "}
                      <br />
                      <span className="freeshipp ">
                        FREE Shipping by Amazon
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-2 borr">
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71-QaYJWs-L._AC_UL165_SR165,165_.jpg"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body lh-sm px-1 g-0">
                    <p className="card-tite size">
                      My First Tackle Box Playset Plush and Board Book Curious
                      George Goes Fishing Set
                    </p>
                    <div class="small-ratings text-warning">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star"></i>
                    </div>

                    <p className="card-price">
                      <strong className="fs-5">$39.95</strong> <br />
                      <span className="fs-small">
                        Get it as soon as Sunday, Jul 28
                      </span>{" "}
                      <br />
                      <span className="freeshipp ">
                        FREE Shipping by Amazon
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-2 borr">
                <div className="card-body lh-sm px-1 g-0">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/6199+1DIgNL._AC_UL165_SR165,165_.jpg"
                    className="card-img-top"
                    alt="Product"
                  />
                  <p className="card-tite size">
                    My First Tackle Box Playset Plush and Board Book Curious
                    George Goes Fishing Set
                  </p>
                  <div class="small-ratings text-warning">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  <p className="card-price">
                    <strong className="fs-5">$39.95</strong> <br />
                    <span className="fs-small">
                      Get it as soon as Sunday, Jul 28
                    </span>{" "}
                    <br />
                    <span className="freeshipp ">FREE Shipping by Amazon</span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* ________________________bootstrap ____________________ */}
        <div className="container">
          <div className="row gap-4 py-5 row-cols-1 row-cols-lg-5">
            <div className="feature col borr">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/710+-T1ESAL._AC_UL165_SR165,165_.jpg"
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body lh-sm px-1 g-0">
                  <p className="card-tite size">
                    My First Tackle Box Playset Plush and Board Book Curious
                    George Goes Fishing Set
                  </p>
                  <div class="small-ratings text-warning">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  <p className="card-price">
                    <strong className="fs-5">$39.95</strong> <br />
                    <span className="fs-small">
                      Get it as soon as Sunday, Jul 28
                    </span>{" "}
                    <br />
                    <span className="freeshipp ">FREE Shipping by Amazon</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="feature col ">
              <div className="card-body lh-sm px-1 g-0 borr">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/6199+1DIgNL._AC_UL165_SR165,165_.jpg"
                  className="card-img-top"
                  alt="Product"
                />
                <p className="card-tite size">
                  My First Tackle Box Playset Plush and Board Book Curious
                  George Goes Fishing Set
                </p>
                <div class="small-ratings text-warning">
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star rating-color"></i>
                  <i class="fa fa-star"></i>
                </div>

                <p className="card-price">
                  <strong className="fs-5">$39.95</strong> <br />
                  <span className="fs-small">
                    Get it as soon as Sunday, Jul 28
                  </span>{" "}
                  <br />
                  <span className="freeshipp ">FREE Shipping by Amazon</span>
                </p>
              </div>
            </div>
            <div className="feature col">
              <div className="card-body lh-sm px-1 g-0 borr">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51fiJ7QI4aL._AC_UL165_SR165,165_.jpg"
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body lh-sm px-1 g-0">
                  <p className="card-tite size">
                    My First Tackle Box Playset Plush and Board Book Curious
                    George Goes Fishing Set
                  </p>
                  <div class="small-ratings text-warning">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  <p className="card-price">
                    <strong className="fs-5">$39.95</strong> <br />
                    <span className="fs-small">
                      Get it as soon as Sunday, Jul 28
                    </span>{" "}
                    <br />
                    <span className="freeshipp ">FREE Shipping by Amazon</span>
                  </p>
                </div>
              </div>
              <div className="feature col borr"></div>
            </div>
            <div className="feature col borr">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71-QaYJWs-L._AC_UL165_SR165,165_.jpg"
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body lh-sm px-1 g-0">
                  <p className="card-tite size">
                    My First Tackle Box Playset Plush and Board Book Curious
                    George Goes Fishing Set
                  </p>
                  <div class="small-ratings text-warning">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  <p className="card-price">
                    <strong className="fs-5">$39.95</strong> <br />
                    <span className="fs-small">
                      Get it as soon as Sunday, Jul 28
                    </span>{" "}
                    <br />
                    <span className="freeshipp ">FREE Shipping by Amazon</span>
                  </p>
                </div>
              </div>
              <div className="feature col borr"></div>
            </div>
            <div className="feature col borr">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/71jlfiJJnrL._AC_UL165_SR165,165_.jpg"
                  className="card-img-top"
                  alt="Product"
                />
                <div className="card-body lh-sm px-1 g-0">
                  <p className="card-tite size">
                    My First Tackle Box Playset Plush and Board Book Curious
                    George Goes Fishing Set
                  </p>
                  <div class="small-ratings text-warning">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>

                  <p className="card-price">
                    <strong className="fs-5">$39.95</strong> <br />
                    <span className="fs-small">
                      Get it as soon as Sunday, Jul 28
                    </span>{" "}
                    <br />
                    <span className="freeshipp ">FREE Shipping by Amazon</span>
                  </p>
                </div>
              </div>
              <div className="feature col borr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
