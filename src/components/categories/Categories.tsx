import React from 'react'

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories-content">
                <div className="categories-content-bar">
                    <div className="categories-content-bar-menu">
                        <div className="categories-content-bar-menu-item">New Arrivals</div>
                        <div className="categories-content-bar-menu-item">Best Sellers</div>
                        <div className="categories-content-bar-menu-item">Trending Plants</div>
                    </div>
                    <div className="categories-content-bar-timer">
                        <p>Ends In: <span>00:00:00:00</span></p>
                    </div>
                </div>
                <div className="categories-content-images">
                    <div className="categories-content-images-side"></div>
                    <div className="categories-content-images-main">
                        <div className="categories-content-images-main-top">
                            
                        </div>
                        <div className="categories-content-images-main-bottom">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories-button">Explore Category</div>
        </div>
    )
}

export default Categories