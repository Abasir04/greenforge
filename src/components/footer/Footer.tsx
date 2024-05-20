import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-side">
                <div className="footer-side-logo">
                    <img src="" alt="greenforgeLogo" />
                    <h6>Green<span>forge</span></h6>
                </div>
                <div className="footer-side-contact">
                    <div className="footer-side-contact-mail">
                        <p><i />skillsforge.tech@gmail.com</p>
                    </div>
                    <div className="footer-side-contact-location">
                        <p><i />No 14, skillsforge street Lagos</p>
                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-main-sitemap">
                    <p>Sitemap</p>
                    <div className="footer-main-sitemap-content">
                        <div className="sitemap-content-item">Home</div>
                        <div className="sitemap-content-item">Shop</div>
                        <div className="sitemap-content-item">Contact Us</div>
                        <div className="sitemap-content-item">About Us</div>
                    </div>
                </div>
                <div className="footer-main-legal">
                    <p>Legal</p>
                    <div className="footer-main-legal-content">
                        <div className="legal-content-item">Privacy&Policy</div>
                        <div className="legal-content-item">Terms&Conditions</div>
                        <div className="legal-content-item">Collaborations</div>
                    </div>
                </div>
                <div className="footer-main-newsletter">
                    <p>NewsLetter</p>
                    <div className="footer-main-newsletter-content">
                        <div className="newsletter-content-mail">
                            <input type="text" name="mail" placeholder='Enter email address' />
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