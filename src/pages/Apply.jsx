
import React from 'react';
import userImage3 from "../assets/images/hand-writing.png";
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
                    </div>
                    <div className="col-lg-6 about-img wow fadeInUp">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img className="img-fluid w-100 rounded-circle  p-3" src={userImage3} alt="hand-writing"/>
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