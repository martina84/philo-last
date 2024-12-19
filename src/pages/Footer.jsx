// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';

// function Footer() {
//   return (
//     <>
//     <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
//             <div className="container  py-5">
//                 <div className="row g-5">
//                     <div className="col-lg-12 col-md-6">
//                         <div className="row">
//                         <div className="d-flex pt-2 justify-content-center">
//                             <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></Link>
//                             <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></Link>
//                             <Link className="btn btn-outline-light btn-social" to=""><i class="fab fa-whatsapp"></i></Link>
//                             <Link className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></Link>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Footer

// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// export default function App() {
//   return (
//     <MDBFooter className='bg-dark text-center text-white'>
//       <MDBContainer className='p-4 pb-0'>
//         <section className='mb-4'>

//         <MDBBtn 
//   outline 
//   color="light" 
//   floating 
//   className="m-1 rounded-circle" 
//   href="https://wa.me/1557020506" 
//   role="button"
//   target="_blank"  // Optional: This opens the link in a new tab
// >
//   <MDBIcon fab icon="whatsapp" />
// </MDBBtn>
// <MDBBtn 
//   outline 
//   color="light" 
//   floating 
//   className="m-1 rounded-circle" 
//   href="https://wa.me/1557020506" 
//   role="button"
//   target="_blank"  // Optional: This opens the link in a new tab
// >
//   <MDBIcon fab icon="phone" />
// </MDBBtn>
// <MDBBtn 
//   outline 
//   color="light" 
//   floating 
//   className="m-1 rounded-circle" 
//   href="https://wa.me/1557020506" 
//   role="button"
//   target="_blank"  // Optional: This opens the link in a new tab
// ><a href="" class="me-4 text-reset">
//         <i class="fab fa-facebook-f"></i>
//       </a>
// </MDBBtn>

//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2022 Copyright:
//         <a className='text-white'>
//           Philo Association
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{'Philo Association'}
      </div>
    </MDBFooter>
  );
}