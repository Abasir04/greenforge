import React from 'react'
import './Ourplants.css'

const plantTypes = [
    'Outdoor Plants',
    'Flowering Plants',
    'Cone-bearing Plants',
    'Fruiting Plants',
    'Herb Plants',
    'Indoor Plants'
]

const plantImg = [
    "../../assets/images/snakePlant.png",
    "../../assets/images/cactusPlant.png",
    "../../assets/images/zzPlant.png"
]

const Ourplants = () => {
    return (
        <div className="ourplants">
            <div className="ourplants__header">
                <h2>
                    Our <span>Plants</span>
                </h2>
            </div>
            <div className="ourplants__content">
                <div className="ourplants__types">
                    {plantTypes.map((plantType, index) => (
                        <div key={index} className="ourplants__type-item">
                            {plantType}
                        </div>
                    ))}
                </div>
                <div className="ourplants__images">
                    <div className="ourplants__images-menu">
                        {plantImg.map((imgSrc, index) => (
                            <div key={index} className="ourplants__images-menu-item">
                                <img src={imgSrc} alt={`Plant ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ourplants__images-next-buttons"></div>
        </div>
    );
}

export default Ourplants