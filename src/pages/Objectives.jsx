import React from 'react'
import objective from '../assets/images/collaboration-partner-hands-600px.jpg';
import { useTranslation } from 'react-i18next';

function Objectives() {

    const {t, i18n} = useTranslation();

return (
    <>
    <div className="container-xxl py-5">
            <div className="container">
                <div className=" rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" style={{ minHeight: '400px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={objective} style={{ objectFit: 'cover' }}/>
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
        </div>
    </>
)
}

export default Objectives;