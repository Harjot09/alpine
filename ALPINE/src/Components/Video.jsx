import React, { useRef, useState } from 'react'

const Video = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    if (!videoRef.current) return
    videoRef.current.play()
  }

  return (
    <section className="video-card">
      <div className="video-card__frame">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
        <source src="Plants and Their Systems Science Presentation in Light Brown Light Blue Flat Graphic Style.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            type="button"
            className="video-card__play"
            aria-label="Play video"
            onClick={handlePlayClick}
          >
            <span className="video-card__play-icon" />
          </button>
        )}
      </div>
    </section>

  )
}

export default Video;
