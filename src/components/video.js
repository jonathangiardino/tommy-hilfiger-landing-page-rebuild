import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  position: relative;
`

const VideoContainer = styled.div`
  position: absolute;
  left: 8%;
  right: 0;
  z-index: 3;
`
const VideoSource = styled.video`
  margin-top: -3rem;
`

const BoxShadowLeft = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 71rem;
  height: 16rem;
  background-color: lightgrey;
  z-index: 0;
  opacity: 0.2;
`
const BoxShadowRight = styled.div`
  position: absolute;
  top: -5rem;
  right: 10.25rem;
  width: 40rem;
  height: 10rem;
  background-color: lightgrey;
  z-index: 0;
  opacity: 0.2;
`

const Video = ({ testVideo }) => {
  return (
    <VideoWrapper>
      <BoxShadowLeft />
      <BoxShadowRight />
      <VideoContainer>
        <VideoSource autoPlay muted loop controls height="450">
          <source src={testVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </VideoSource>
      </VideoContainer>
    </VideoWrapper>
  )
}

export default Video
