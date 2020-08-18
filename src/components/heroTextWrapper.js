import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// COMPONENTS
import FirstLine from "./firstLine"
import SecondLine from "./secondLine"

const MainWrapper = styled.div`
  position: absolute;
  top: 10%;
  z-index: 4;
`

const CaptionWrapper = styled.div`
  position: relative;
`
const Caption = styled(motion.h1)`
  font-family: "Hero IC Condensed Medium";
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  color: #ff2424;
`
const CaptionMask = styled.div`
  width: 200px;
  height: 35px;
  background-color: white;
  position: absolute;
  bottom: -30px;
`

const HeroTextWrapper = () => {
  return (
    <MainWrapper>
      <CaptionWrapper>
        <Caption
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
        >
          24/7 live.
        </Caption>
        <CaptionMask />
      </CaptionWrapper>

      <FirstLine />
      <SecondLine />
    </MainWrapper>
  )
}

export default HeroTextWrapper
