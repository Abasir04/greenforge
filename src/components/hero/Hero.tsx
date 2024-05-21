import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__navbar">
                <div className="hero__navbar-logo">
                    <p>Green<span>forge</span></p>
                </div>
                <div className="hero__navbar-searchbox">
                    <input type="text" name="inbox" placeholder="What are you rooting for?"/>
                    <FontAwesomeIcon icon={faSearch} className="hero__navbar-searchbox-icon" />
                </div>
                <div className="hero__navbar-menu">
                    <div className="hero__navbar-menu-item">Home</div>
                    <div className="hero__navbar-menu-item">Shop</div>
                    <div className="hero__navbar-menu-item">Contact Us</div>
                    <div className="hero__navbar-menu-item">About Us</div>
                    <div className="hero__navbar-cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
                </div>
            </div>
            <div className="hero__content">
                <div className="hero__content-text">
                    <h1>
                        Grow <span>green,</span> Get <span>rooted</span>
                    </h1>
                    <p>
                        Cultivate happiness, one plant at a time. Shop our collection and
                        discover the joy of nature, indoors & out.
                    </p>
                    <div className="hero__content-button">Shop Now</div>
                </div>
                <div className="hero__content-picture"></div>
            </div>
        </div>
    );
};

export default Hero;
