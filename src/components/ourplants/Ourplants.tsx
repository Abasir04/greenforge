import React from 'react'

const plantTypes = [
    'Outdoor Plants',
    'Flowering Plants',
    'Cone-bearing Plants',
    'Fruiting Plants',
    'Herb Plants',
    'Indoor Plants'
]

const items = Array(6).fill(null);

const Ourplants = () => {
    return (
        <div className="ourplants">
            <div className="ourplants-header"></div>
            <div className="ourplants-types">
                {plantTypes.map((plantType, index) => (
                    <div key={index} className="ourplants-types-item">
                    {plantType}
                    </div>
                ))}
            </div>
            <div className="ourplants-images">
                <div className="ourplants-images-menu">
                    {items.map((_, index) => (
                        <div key={index} className="ourplants-images-menu-item">
                        <div className="ourplants-images-menu-item-picture"></div>
                        <div className="ourplants-images-menu-item-text"></div>
                        </div>
                    ))}
            </div>
                <div className="ourplants-images-nextButtons"></div>
            </div>
        </div>
    )
}

export default Ourplants