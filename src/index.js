import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderCarousel from './pages/HeaderCarousel';
import About from './pages/About';
import Courses from './pages/Objectives';
import Contact from './pages/Contact';



const myRouter = createBrowserRouter([
      {path:"/", element:<App/>, children:[
        {path:"/home", element:<HeaderCarousel/>},
        {path:"/about", element:<About/>},
        {path:"/courses", element:<Courses/>},
        {path:"/contact", element:<Contact/>},
      ]},
      
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={myRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
