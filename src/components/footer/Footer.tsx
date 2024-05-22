import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__side">
                <div className="footer__side-logo">
                    <div className="footer__side-logo-img"></div>
                    <h6>Green<span>forge</span></h6>
                </div>
                <div className="footer__side-contact">
                    <div className="footer__side-contact-mail">
                        <div className="mail-img"></div>
                        <div className="mail-text">skillsforge.tech@gmail.com</div>
                    </div>
                    <div className="footer__side-contact-location">
                        <div className="location-img"></div>
                        <div className="location-text">No 14, skillsforge street Lagos</div>
                    </div>
                </div>
            </div>
            <div className="footer__main">
                <div className="footer__main-sitemap">
                    <h4>Sitemap</h4>
                    <div className="footer__main-sitemap-content">
                        <div className="sitemap-content-item">Home</div>
                        <div className="sitemap-content-item">Shop</div>
                        <div className="sitemap-content-item">Contact Us</div>
                        <div className="sitemap-content-item">About Us</div>
                    </div>
                </div>
                <div className="footer__main-legal">
                    <h4>Legal</h4>
                    <div className="footer__main-legal-content">
                        <div className="legal-content-item">Privacy&Policy</div>
                        <div className="legal-content-item">Terms&Conditions</div>
                        <div className="legal-content-item">Collaborations</div>
                    </div>
                </div>
                <div className="footer__main-newsletter">
                    <h4>NewsLetter</h4>
                    <div className="footer__main-newsletter-content">
                        <div className="newsletter-content-mail">
                            <input type="text" name="mail" value='Enter email address' />
                        </div>
                        <div className="newsletter-content-subscribe">
                            <input type="button" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer