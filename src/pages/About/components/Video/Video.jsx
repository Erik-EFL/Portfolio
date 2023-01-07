import React from 'react'
import IFrame from './Iframe'

function Video() {
  return (
    <>
      <IFrame src="https://www.youtube.com/embed/9OqHsqdkDnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></IFrame>
    </>
  )
}

export default Video
