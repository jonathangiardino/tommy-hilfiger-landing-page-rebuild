import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0 0 0;
  padding: 0;
`
const Letter = styled(motion.h1)`
  color: #ff2424;
  margin: 0 0 0 -1.2rem;
  padding: 0;
  padding-right: 6rem;
  font-size: 29rem;
  font-family: "Hero IC Condensed Medium";
  line-height: 78%;
`

const HeartGrid = styled(motion.div)`
  display: grid;
  grid-template-rows: 26rem;
  grid-template-columns: 24rem;
  margin-right: 2rem;
`
const HeartContainer = styled(motion.div)`
  grid-area: 1 / 1 / 1 / 1;
`
const Heart = styled(Img)`
  height: 24rem;
  width: 26rem;
  margin-right: 6rem;
  margin-left: -4.5rem;
  margin-top: -1.3rem;
`

const FirstLine = () => {
  const data = useStaticQuery(graphql`
    query {
      heart: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heartBlue: file(relativePath: { eq: "heart-blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const flicker = [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0]

  return (
    <Line>
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.8,
        }}
      >
        L
      </Letter>
      <HeartGrid
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.4,
        }}
      >
        <HeartContainer>
          <Heart fluid={data.heart.childImageSharp.fluid} />
        </HeartContainer>

        <HeartContainer
          initial={{ opacity: 0 }}
          animate={{
            opacity: flicker,
            x: [15, 0, 15, 0],
          }}
          transition={{
            duration: 0.2,
            delay: 1.8,
          }}
        >
          <Heart fluid={data.heartBlue.childImageSharp.fluid} />
        </HeartContainer>
      </HeartGrid>
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1,
        }}
      >
        V
      </Letter>
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.2,
        }}
      >
        E
      </Letter>
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.4,
        }}
      >
        .
      </Letter>
    </Line>
  )
}

export default FirstLine
