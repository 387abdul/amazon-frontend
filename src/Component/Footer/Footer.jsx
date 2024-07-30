import React from 'react'
import './Footer.css'
// import amazonLogo from "../../assets/images/navimages/amazonLogo.png";
import LanguageIcon from '@mui/icons-material/Language';
// import america from "../../../assets/images/navimages/america.webp";


const Footer = () => {
  return (
    <>
      <div className="baktotop mt-5 w-100 ">
        <div className="back text-light text-center ">
        <span>Back to top</span>
        </div>
      </div>
      <div className="publiclink">
            <div className="container pb-5 marcus ">
                <div className="row pt-3">
                    <div className="col-3 gtku">
                        <h4 className='fs-5'>Get to know Us</h4>
                        <span>Careers</span><br />
                        <span>Amazon Newsletters</span> <br />
                        <span>About Amazon</span> <br />
                        <span>Accessibility</span> <br />
                        <span>Sustainability</span> <br />
                        <span>spanress Center</span> <br />
                        <span>Investor Relations</span> <br />
                        <span>Amazon Devices</span> <br />
                        <span>Amazon Science</span> <br />
                    </div>
                    <div className="col-3 gtku">
                    <h4 className='fs-5'>Make Money with Us</h4>
                        <span>Sell on Amazon</span> <br />
                        <span>Sell apps on Amazon</span> <br />
                        <span>Supply to Amazon</span> <br />
                        <span>Protect & Build Your Brand</span> <br />
                        <span>Become an Affiliate</span> <br />
                        <span>Become a Delivery Driver</span> <br />
                        <span>Start a Package Delivery Business</span> <br />
                        <span>Advertise Your Products</span> <br />
                        <span>Self-Publish with Us</span> <br /> 
                        <span>Become an Amazon Hub Partner</span> <br />
                        <span>See More Ways to Make Money</span> <br />
                    </div> 
                    <div className="col-3 gtku">
                    <h4 className='fs-5'>Amazon Payment Products</h4>
                        <span>Amazon Visa</span> <br />
                        <span>Amazon Store Card</span> <br />
                        <span>Amazon Secured Card</span> <br />
                        <span>Amazon Business Card</span> <br />
                        <span>Shop with Points</span> <br />
                        <span>Credit Card Marketplace</span> <br />
                        <span>Reload Your Balance</span> <br />
                        <span>Gift Cards</span> <br />
                        <span>Amazon Currency Converter</span> <br />
                    </div>
                    <div className="col-3 gtku">
                    <h4 className='fs-5'>	
                    Let Us Help You</h4>
                        <span>Your Account</span> <br />
                        <span>Your Orders</span> <br />
                        <span>Shipping Rates & Policies</span> <br />
                        <span>Amazon Prime</span> <br />
                        <span>Returns & Replacements</span> <br />
                        <span>Manage Your Content and Devices</span> <br />
                        <span>Recalls and Product Safety Alerts</span> <br />
                        <span>Help</span> <br />
                    </div>
                </div>
            </div>
            <div className='hsdfb'>
            <div className="container d-flex g-2 ">
                <div className="leftlinksss w-100 footwewew">
                    <p>Your Orders</p><br />
                    <p>Your Lists</p><br />
                    <p>Find a Gift</p><br />
                    <p>Your Subscribe</p><br />
                    <p>Sell products on Amazon </p><br />
                    <p>Returns</p><br />
                    <p>Customer Servivce</p><br />
                    <p>Help</p><br />
                </div>
                <div className="rightlinksss w-100 footwewew">
                    <p>AmazonFresh</p><br />
                    <p>Gift Cards</p><br />
                    <p>Your Account</p><br />
                    <p>Browsing History</p><br />
                    <p>Your Recommandations</p><br />
                    <p>1 Click Setting</p><br />
                    <p>Recall and Product Saftey</p><br />
                </div>
            </div>
            </div>
            <hr />
            <div className="container d-flex justify-content-center p-5 ">
                <div className="amazon px-3">
                    <img src="http://localhost:3000/static/media/amazonLogo.55a7271679117fce19b6.png" alt="amazon" width={100} />
                </div>
                <div className='languagew mx-3 px-2 py-1'>
                    <LanguageIcon sx={{ fontSize: "15px" }} /> English  
                </div>
                <div className='languagew mx-3 px-3 py-2'>
                    <img src="http://localhost:3000/static/media/america.449bbbc091b5376fe377.webp" alt="america" width={19}/> United States
                </div>
            </div>
      </div>
      <div className="otherlink">
        <div className="container ">
            <div className="container right mimin">
                <div className="row px-5" >
                    <div className="col-2 gap-0">
                    <div className="otherlink">
                        <div className="text">
                            <span className='text-light '>Amazon Music</span> <br />
                            <span>Stream millions of songs</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Amazon Fresh</span> <br />
                            <span>Groceries & More
                            Right To Your Door</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>IMDb</span> <br />
                            <span>Movies, TV & Celebrities</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Whole Foods Market</span> <br />
                            <span>America’s Healthiest Grocery Store</span>
                        </div>
                    </div>
                    </div>
                    {/* ------------- */}
                    <div className="col-2 gap-0">
                    <div className="otherlink">
                        <div className="text">
                            <span className='text-light '>Amazon Ads</span> <br />
                            <span>Reach customers wherever they spend their time</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>AmazonGlobal</span> <br />
                            <span>Ship Oders internationally</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>IMDb Pro</span> <br />
                            <span>Get Info Entertainment Professional need</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Woot!</span> <br />
                            <span>Deals and Shenanigans</span>
                        </div>
                    </div>
                    </div>
                    {/* ------------------ */}
                    <div className="col-2 gap-0">
                    <div className="otherlink">
                        <div className="text">
                            <span className='text-light '>Amazon Ads</span> <br />
                            <span>Reach customers wherever they spend their time</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>AmazonGlobal</span> <br />
                            <span>Ship Oders internationally</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>IMDb Pro</span> <br />
                            <span>Get Info Entertainment Professional need</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Woot!</span> <br />
                            <span>Deals and Shenanigans</span>
                        </div>
                    </div>
                    </div>
                    {/* -----------=--------=-+ */}
                    <div className="col-2 gap-0">
                    <div className="otherlink">
                        <div className="text">
                            <span className='text-light '>Amazon Ads</span> <br />
                            <span>Reach customers wherever they spend their time</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>AmazonGlobal</span> <br />
                            <span>Ship Oders internationally</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>IMDb Pro</span> <br />
                            <span>Get Info Entertainment Professional need</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Woot!</span> <br />
                            <span>Deals and Shenanigans</span>
                        </div>
                    </div>
                    </div>
                    {/* ------------------ */}
                    <div className="col-2 gap-0">
                    <div className="otherlink">
                        <div className="text">
                            <span className='text-light '>Amazon Ads</span> <br />
                            <span>Reach customers wherever they spend their time</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>AmazonGlobal</span> <br />
                            <span>Ship Oders internationally</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>IMDb Pro</span> <br />
                            <span>Get Info Entertainment Professional need</span>
                        </div> <br />
                        <div className="text">
                            <span className='text-light '>Woot!</span> <br />
                            <span>Deals and Shenanigans</span>
                        </div>
                    </div>
                    {/* ------------- */}
                    </div>
                </div>
            </div>
            <div className="footertext text-center text-light pt-5 pb-5 title">
                  <p>
                    Conditions of Use  Privacy Notice  Consumer Health Data Privacy Disclosure  Your Ads Privacy Choices
                  </p>
                  <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
