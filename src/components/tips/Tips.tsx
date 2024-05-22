import React from 'react'
import './Tips.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Tips = () => {
    const rating:number = 5

    return (
        <div className="tip">
            <div className="tips__container">
                <div className="tips__container-header">
                    <h2>Greenhouse <span>Tips</span></h2>
                </div>
                <div className="tips__container-content">
                    <div className="tips__container-content-side">
                        <div className="tips__container-content-side-video">

                        </div>
                        <div className="tips__container-content-side-text">
                            <h4>How to take care of Plants</h4>
                            <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            className={`side-text-icon ${i < rating ? 'filled' : ''}`}
                                        />
                                    ))}
                                </div>
                            <p>Watch our greenhouse guide and discover simple tips for all your plant care needs! From watering frequency to choosing the right pot, we've got you covered. Also you can download the E-book that guides the same procedure covered in the video, click the download button below and enjoy the journey to a greener environment.</p>
                            <div className="side-text-button">Download E-Book</div>
                        </div>
                    </div>
                    <div className="tips__container-content-main">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips