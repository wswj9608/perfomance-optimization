import React, { useEffect, useRef } from "react"
import useIntersectionObserverr from "../hooks/useIntersectionObserver"

function Card(props) {
  const imgRef = useRef(null)
  const { observer } = useIntersectionObserverr(imgRef)

  useEffect(() => {
    if (observer) {
      observer.observe(imgRef.current)
    }
  }, [observer])

  return (
    <div className="Card text-center">
      <picture>
        <source data-srcSet={props.webpImage} type="image/webp" />
        <img data-src={props.image} ref={imgRef} />
      </picture>
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  )
}

export default Card
