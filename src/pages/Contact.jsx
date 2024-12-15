import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function Contact() {

    const {t, i18n } = useTranslation();
return (
    <>
    <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">{t("contact")}</h1>
                                <div>
                                    <p><i className="fa fa-phone-alt me-3"></i> +201557020506</p>
                                    <p><i className="fa fa-envelope me-3"></i><Link>Philofordev24@gmail.com</Link></p>
                                    <p><i class="fab fa-whatsapp me-3"></i>+201557020506</p>
                                    <p><i className="fa fa-map-marker-alt me-3"></i> {t("contact-adress")}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" style={{ minHeight: '400px' }}>
                            <div class="position-relative h-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.042516169509!2d31.329772076353006!3d30.09296867489922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f53ca77857%3A0x747c3b43f3628801!2z2KfZhdin2YUg2KzZiNmE2K_YsiDYrNmK2YUsIDE5IFNhbGFoIEVsLURpbiBTdCwgQWxtYXphaCwgSGVsaW9wb2xpcywgQ2Fpcm8gR292ZXJub3JhdGUgMTIzNDE!5e0!3m2!1sen!2seg!4v1733664835050!5m2!1sen!2seg" className="no-border w-100 h-100"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Contact;