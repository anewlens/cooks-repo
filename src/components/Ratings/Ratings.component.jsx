import React from "react"
import { ReactComponent as StarFilled } from "../../images/star.svg"
import { ReactComponent as StarOutline } from "../../images/star-outline.svg"

function Ratings({ rating, className }) {
  function ratingArr(num) {
    const arr = [1, 2, 3, 4, 5]

    return arr.map((val, index) => {
      if (index + 1 <= num) {
        return 1
      } else {
        return 0
      }
    })
  }

  return (
    <span className="Ratings">
      {ratingArr(rating).map(el =>
        el === 1 ? (
          <StarFilled className={className} />
        ) : (
          <StarOutline className={className} />
        )
      )}
    </span>
  )
}

export default Ratings
