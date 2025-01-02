import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ktaketo from '../assets/images/03+++.jpg';
import charity from '../assets/images/collaboration-partner-hands-600px.jpg';
import './style.css';


const HeaderCarousel = () => {

  return (
    <div>
      <div className=' p-0 mb-5'>
       <div className='owl-carousel header-carousel position-relative' >
       <div className="owl-carousel-item position-relative">
          <img className="img-fluid " src={ktaketo} alt="First slide" />
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

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';
// import kids from '../assets/images/kids.png'
// import { useTranslation } from 'react-i18next';

// export default function HeaderCarousel() {
//   const {t, i18n} = useTranslation();
//   return (
    
//     <>
//         <section className="banner_main header-section ">
//                <div className="container ">
//                   <div className="row d_flex ">
//                      <div className="col-md-6 justify-content-start align-content-center">
//                         <div className="text-bg">
//                            <h1>Philo Association</h1>
//                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
//                            <Link href="#">Read More</Link>
//                         </div>
//                      </div>
//                      <div className="col-md-6 ">
//                         <div className="text-img d-flex justify-content-start align-content-center">
//                            <img className='img-fluid' src={kids} alt="#"/>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </section> 
//     </>
//   )
// }
