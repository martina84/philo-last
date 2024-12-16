import React from 'react'
import { Link } from 'react-router-dom';
import teamwork from "../assets/images/teamwork-and-team-building.png";
import { useTranslation } from 'react-i18next';

function TeamWork() {
    const {t, i18n} = useTranslation();
return (
    <>
    <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">{t("team-title")}</h1>
                                <p className="mb-1">
                               {t("team")}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" style={{ minHeight: '400px'}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={teamwork} style={{ objectFit: 'cover' }}/>
                            </div>
                    </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </>
)
}

export default TeamWork;