import React from 'react'
import { useTranslation } from 'react-i18next';
import userImage1 from '../assets/images/cute-girl-student-cartoon-character-in-school-vector-47498931.jpg';
import userImage2 from "../assets/images/ai-generated-8862067_640.webp";
import userImage3 from "../assets/images/school-students-digital-art-style-education-day_23-2151164396.avif";

function Objectives() {

    const {t, i18n} = useTranslation();

return (
    <>
    <div className="container-xxl py-5">
            <div className="container">
                  <div className='row'> 
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
                    <div className="col-lg-6 wow fadeIn">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">{t("objectives-title")}</h1>
                                <p className="mb-4"> 
                                    {t('objectives')}
                                </p>
                            </div>
                    </div>
                  </div>
            </div>
        </div>
    </>
)
}

export default Objectives;