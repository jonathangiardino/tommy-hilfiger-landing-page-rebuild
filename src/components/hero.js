import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

// COMPONENTS
import HeroTextWrapper from "./heroTextWrapper"
import { BoxShadowTop } from "./boxShadows"

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
const RightTopMask = styled(motion.div)`
  position: absolute;
  right: -1670px;
  top: 0;
  z-index: 2;
  width: 1760px;
  height: 35%;
  background-color: white;
`
const RightBottomMask = styled(motion.div)`
  position: absolute;
  right: -1770px;
  bottom: 0;
  z-index: 2;
  width: 1760px;
  height: 65%;
  background-color: white;
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
        }}
      >
        <BackgroundImage fluid={data.backgroundImage.childImageSharp.fluid} />
      </motion.div>
      <RightTopMask
        initial={{ right: -1370 }}
        animate={{ right: -1670 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.8 }}
      >
        <BoxShadowTop />
      </RightTopMask>
      <RightBottomMask
        initial={{ right: -1370 }}
        animate={{ right: -1770 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
      />
      <HeroTextWrapper />
    </HeroWrapper>
  )
}

export default Hero
