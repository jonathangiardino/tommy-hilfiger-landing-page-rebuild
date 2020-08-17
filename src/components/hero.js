import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// COMPONENTS
import HeroTextWrapper from "./heroTextWrapper"

const HeroWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`

const BackgroundImage = styled(Img)`
  position: absolute;
  left: 1.5rem;
  width: 1760px;
  z-index: 1;
`

const LeftCopyMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 260px;
  height: 100%;
  background-color: white;
`
const RightTopMask = styled.div`
  position: absolute;
  right: -1670px;
  top: 0;
  z-index: 2;
  width: 1760px;
  height: 35%;
  background-color: white;
`
const RightBottomMask = styled.div`
  position: absolute;
  right: -1770px;
  bottom: 0;
  z-index: 2;
  width: 1760px;
  height: 65%;
  background-color: white;
`
const BoxShadowTop = styled.div`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 4rem;
  background-color: lightgrey;
  opacity: 0.2;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(
        relativePath: { eq: "tommy-denim__header-men.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1760) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper>
      <LeftCopyMask />
      <BackgroundImage fluid={data.backgroundImage.childImageSharp.fluid} />
      <RightTopMask>
        <BoxShadowTop />
      </RightTopMask>
      <RightBottomMask />
      <HeroTextWrapper />
    </HeroWrapper>
  )
}

export default Hero
