import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0 0 0;
  padding: 0;
`
const Letter = styled.h1`
  color: #ff2424;
  margin: 0 0 0 -1.2rem;
  padding: 0;
  padding-right: 6rem;
  font-size: 29rem;
  font-family: "Hero IC Condensed Medium";
  line-height: 78%;
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
    }
  `)
  return (
    <Line>
      <Letter>L</Letter>
      <Heart fluid={data.heart.childImageSharp.fluid} />
      <Letter>V</Letter>
      <Letter>E</Letter>
      <Letter>.</Letter>
    </Line>
  )
}

export default FirstLine
