import React from 'react'
import Ratings from '../Ratings/Ratings.component'

function Preview({title, category, date, rating, }) {
    return (
        <div className="Preview">
            <header className="Preview-header">
                <h1 className="Preview-title">
                    {title}
                </h1>
                <Ratings rating={rating} className='Preview-rating-star' />
            </header>
            <span className="Preview-subheading">
            <p className="Preview-category">{category}</p>
            <p className="Preivew-date">Added {date}</p>
            </span>
            
        </div>
    )
}

export default Preview