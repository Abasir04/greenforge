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
                        index === 0 ? (
                            <div key={index} className="ourplants__type-item active">
                                {plantType}
                            </div>
                        ) : (
                            <div key={index} className="ourplants__type-item">
                                {plantType}
                            </div>
                        )
                    ))}
                </div>
                <div className="ourplants__images-menu">
                    <div className="ourplants__images-menu-item-1 plant"></div>
                    <div className="ourplants__images-menu-item-2 plant"></div>
                    <div className="ourplants__images-menu-item-3 plant"></div>
                </div>
            </div>
            <div className="ourplants__images-next-buttons"></div>
        </div>
    );
}

export default Ourplants