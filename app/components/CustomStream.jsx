'use client'
import React, { useState, useEffect } from 'react'

function VideoMonitor ({ videoUrl }) {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const updateImage = () => {
      // Replace 'your_image_url' with the URL of your Flask video feed
      setImageSrc(videoUrl + '?timestamp=' + Date.now())
    }

    // Update the image source periodically to fetch new frames
    const interval = setInterval(updateImage, 100) // Adjust the interval as needed

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Video Monitor</h1>
      <img src={imageSrc} alt='Video Feed' width='100%' />
    </div>
  )
}

export default VideoMonitor
