import React, { useEffect, useState } from "react"
import videoWebm from "../assets/banner-video.WebM"
import videoMp4 from "../assets/banner-video.mp4"
import FontFaceObserver from "fontfaceobserver"

function BannerVideo() {
  // const [isFontLoaded, setIsFontLoaded] = useState(false)
  // const font = new FontFaceObserver("BMYEONSUNG")

  // useEffect(() => {
  //   font.load().then(() => {
  //     console.log("font observer")
  //     setIsFontLoaded(true)
  //   })
  // }, [font])

  return (
    <div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
      <div className="absolute h-screen w-full left-1/2">
        <video
          className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen"
          autoPlay
          loop
          muted
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          // opacity: isFontLoaded ? "1" : "0",
          transition: "all 0.3s ease",
        }}
      >
        <div className="text-white text-center">
          <div className="text-6xl leading-none font-semibold">KEEP</div>
          <div className="text-6xl leading-none font-semibold">CALM</div>
          <div className="text-3xl leading-loose">AND</div>
          <div className="text-6xl leading-none font-semibold">RIDE</div>
          <div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
        </div>
      </div>
    </div>
  )
}

export default BannerVideo
