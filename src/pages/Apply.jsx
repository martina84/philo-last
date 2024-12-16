
import React from 'react';
import userImage1 from '../assets/images/cute-girl-student-cartoon-character-in-school-vector-47498931.jpg';
import userImage2 from "../assets/images/ai-generated-8862067_640.webp";
import userImage3 from "../assets/images/school-students-digital-art-style-education-day_23-2151164396.avif";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Apply() {
    const {t, i18n} = useTranslation();
return (
    <>
            <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp">
                        <h1 className="mb-4">{t('apply-title')}</h1>
                        <p> {t("apply")}</p>
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-6">
                                <Link className="btn btn-primary rounded-pill py-3 px-5" to="https://docs.google.com/forms/d/e/1FAIpQLSd-Qe-xHywvEM7v74hibEXFE-hedvmkUtkd_0OqvdFVnXbrRA/viewform?usp=sf_link" >{t('apply-btn')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 about-img wow fadeInUp">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img className="img-fluid w-75 rounded-circle bg-light p-3" src={userImage3} alt=""/>
                            </div>
                            <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3 h-75" src={userImage2} alt=""/>
                            </div>
                            <div className="col-6 text-end" style={{ marginTop: '-150px'}}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3 h-75" src={userImage1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Apply;