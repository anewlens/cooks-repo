import React from 'react'
import { ReactComponent as StarFilled } from "../../images/star.svg"
import { ReactComponent as StarOutline } from "../../images/star-outline.svg"

function Ratings({rating, className}) {
    return (
        <span className='Ratings'>
            {rating.map(num =>
              num === 1 ? (
                <StarFilled className={className}/>
              ) : (
                <StarOutline className={className}/>
              )
            )}
          </span>
    )
}

export default Ratings