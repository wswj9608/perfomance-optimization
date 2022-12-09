import React, { useEffect, useState } from "react"

export default function useIntersectionObserverr(elementRef) {
  const [observer, setObserver] = useState()
  useEffect(() => {
    const handleObserver = (entries, observer) => {
      entries.forEach((entrie) => {
        if (entrie.isIntersecting) {
          const target = entrie.target
          const previousSibling = target.previousSibling
          target.src = target.dataset.src
          previousSibling.srcset = previousSibling.dataset.srcset
          observer.unobserve(elementRef.current)
        }
      })
    }

    const observerOption = {
      root: null,
      rootMargin: "0px",
      // threshold :
    }

    setObserver(new IntersectionObserver(handleObserver, observerOption))
  }, [elementRef])

  return { observer }
}
