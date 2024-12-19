import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo  from '../assets/images/WhatsApp Image 2024-12-01 at 3.55.32 PM (1)-Recovered.png';
import './style.css';
import { useEffect } from 'react';


// useEffect(()=>{
//   let mainLang = lang;
//   if (mainLang) {
//     mainLang = lang;
//   }else {
//     mainLang = "en";
//   }
//   initLang(mainLang);
// }, [initLang, lang]);

function Sector() {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  
  return (
    <>
        <Navbar className=" navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ">
          <Navbar.Brand>
            <img className='logo' src={logo} alt="logo" />
            <h1 className="m-0 d-inline-block text-primary">{t("logo")}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse" className={`d-flex align-items-center justify-content-end ${i18n.language === 'ar' ? 'rtl' : ''}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            {/* <Nav className="m-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>

              <Nav.Link as={Link} to="apply">How to Apply</Nav.Link>
              <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            </Nav> */}
            { i18n.language === 'en' && <button className="btn btn-danger px-3 ms-3" onClick={()=> {
              i18n.changeLanguage('ar');
            }}>العربية</button> }
            { i18n.language === 'ar' && <button className="btn btn-danger px-3 ms-3" onClick={()=> {
              i18n.changeLanguage('en');
            }}>English</button>}          
          </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default Sector;