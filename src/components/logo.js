import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const LogoContainer = styled.div`
  padding-top: 0.15rem;
  padding-left: 0.5rem;
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <LogoContainer>
      <Img fixed={data.logo.childImageSharp.fixed} />
    </LogoContainer>
  )
}

export default Logo
