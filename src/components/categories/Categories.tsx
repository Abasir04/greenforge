import React from 'react'
import "./Categories.css";

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__content">
                <div className="categories__content-bar">
                    <div className="categories__content-bar-menu">
                        <div className="categories__content-bar-menu-item active">
                            <h4>New Arrivals</h4>
                        </div>
                        <div className="categories__content-bar-menu-item">
                            <h4>Best Sellers</h4>
                        </div>
                        <div className="categories__content-bar-menu-item">
                            <h4>Trending Plants</h4>
                        </div>
                    </div>
                    <div className="categories__content-bar-timer">
                        <p>Ends In: <span>00:00:00:00</span></p>
                    </div>
                </div>
                <div className="categories__content-images">
                    <div className="categories__content-images-side"></div>
                    <div className="categories__content-images-main">
                        <div className="categories__content-images-main-top">
                            <div className="categories__content-images-main-top-item1 plant"></div>
                            <div className="categories__content-images-main-top-item2 plant"></div>
                            <div className="categories__content-images-main-top-item3 plant"></div>
                        </div>
                        <div className="categories__content-images-main-bottom">
                            <div className="categories__content-images-main-bottom-item1 plant"></div>
                            <div className="categories__content-images-main-bottom-item2 plant"></div>
                            <div className="categories__content-images-main-bottom-item3 plant"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories__button">Explore Category</div>
        </div>
    );
}

export default Categories