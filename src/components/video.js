import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// COMPONENTS
import { BoxShadowLeft, BoxShadowRight } from "./boxShadows"

const VideoWrapper = styled.div`
  position: relative;
`

const VideoContainer = styled.div`
  position: relative;
  margin-left: 8%;
  z-index: 3;
  width: 65%;
`
const VideoSource = styled.figure`
  margin-top: -3rem;
  font-size: 0;
`

const ControlButton = styled.button`
  position: absolute;
  z-index: 10;
  bottom: 50%;
  left: 50%;
  margin-left: -35px;
  margin-bottom: -35px;
  background-color: transparent;
  border: none;
  transition: opacity 0.3s ease-in-out;
`

const ResumeLabel = styled.h4`
  color: white;
  font-size: 1.2rem;
  font-family: "Hero IC Condensed Medium";
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  position: absolute;
  z-index: 10;
  padding-left: 0.1rem;
  transition: opacity 0.3s ease-in-out;
`

const Video = ({ testVideo }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const video = useRef(null)

  const playPauseMedia = () => {
    if (video.paused || video.ended) {
      console.log(video)
      video.play()
      setIsPlaying(!isPlaying)
    } else {
      setIsPlaying(!isPlaying)
      // video.pause()
    }
  }

  const data = useStaticQuery(graphql`
    query {
      play: file(relativePath: { eq: "play.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pause: file(relativePath: { eq: "pause.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <VideoWrapper>
      <BoxShadowLeft />
      <BoxShadowRight />
      <VideoContainer>
        <VideoSource>
          <ControlButton
            style={{ opacity: isPlaying ? "0" : "1" }}
            onClick={() => setIsPlaying(playPauseMedia)}
          >
            <Img fixed={data.play.childImageSharp.fixed} />
            <ResumeLabel>Resume</ResumeLabel>
          </ControlButton>
          <ControlButton
            style={{ opacity: isPlaying ? "1" : "0" }}
            onClick={() => setIsPlaying(playPauseMedia)}
          >
            <Img fixed={data.pause.childImageSharp.fixed} />
          </ControlButton>
          <video
            ref={video}
            src={testVideo}
            type="video/mp4"
            muted
            loop
            width="100%"
          ></video>
        </VideoSource>
      </VideoContainer>
    </VideoWrapper>
  )
}

export default Video
