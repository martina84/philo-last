import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Outlet} from 'react-router-dom';
import Sector from './pages/Sector';
import Footer from './pages/Footer';
import About from './pages/About';
import HeaderCarousel from './pages/HeaderCarousel';
import Objectives from './pages/Objectives';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import TeamWork from './pages/TeamWork';



// const myRoute = createBrowserRouter([
//   {path: '/', element:<HeaderCarousel/> },
//   {path:'/about', element:<About/>},
//   {path: '/contact', element:<Contact/>},
//   {path:'/courses', element:<Courses/>},
//   {path: '*', element:<h1>404 page not found</h1>}
// ]);

function App() {
  return (
<>
    <Sector/>
    <HeaderCarousel/>
    <About/>
    <Objectives/>
    <TeamWork/>
    <Apply/>
    <Contact/>
    <Footer/>
</>
  )
}

export default App