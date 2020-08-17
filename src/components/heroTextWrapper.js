import React from "react"
import styled from "styled-components"

// COMPONENTS
import FirstLine from "./firstLine"
import SecondLine from "./secondLine"

const MainWrapper = styled.div`
  position: absolute;
  top: 10%;
  z-index: 4;
`

const Caption = styled.h1`
  font-family: "Hero IC Condensed Medium";
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  color: #ff2424;
`

const HeroTextWrapper = () => {
  return (
    <MainWrapper>
      <Caption>24/7 live.</Caption>
      <FirstLine />
      <SecondLine />
    </MainWrapper>
  )
}

export default HeroTextWrapper
