import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ktaketo from '../assets/images/03+.jpg';
import charity from '../assets/images/collaboration-partner-hands-600px.jpg';
import './style.css';


const HeaderCarousel = () => {

  return (
    <div>
      <div className=' p-0 mb-5'>
       <div className='owl-carousel header-carousel position-relative' >
       <div className="owl-carousel-item position-relative">
          <img className="img-fluid w-100 " src={ktaketo} alt="First slide" />
          {/* <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
            <div className="container">
              <div className="row justify-content-start">
                  <div className='col-10 col-lg-8'>
                    <h1 className="display-2 text-white animated slideInDown mb-4">Philo Association</h1>
                    <p className='fs-5 fw-medium text-white mb-4 pb-2'>For Culture and development</p>
                    <Link to="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                    <Link to="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                  </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
       </div>
       {/* <div className='owl-carousel-item owl-carousel header-carousel position-relative'>
          <img className="img-fluid w-100" src={hands} alt="Second slide" />
          <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.</p>
            <Link to="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
            <Link to="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='owl-carousel-item owl-carousel header-carousel position-relative'>
          <img className="img w-100 h-100" src={charity} alt="Second slide"/>
          <div className="carousel-caption position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.</p>
            <Link to="/" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
            <Link to="/" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderCarousel;