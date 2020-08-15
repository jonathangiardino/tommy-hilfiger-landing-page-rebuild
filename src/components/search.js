import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBox = styled.input.attrs({ type: "search", name: "search" })`
  width: 9rem;
  border: 1px solid lightgrey;
  padding: 0.3rem 0.6rem;
  margin-right: 1rem;
  position: relative;
  z-index: 1;
  &::placeholder {
    font-size: 0.7rem;
    color: grey;
  }
`

const Search = () => {
  const data = useStaticQuery(graphql`
    query {
      search: file(relativePath: { eq: "search.png" }) {
        childImageSharp {
          fixed(height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <SearchWrapper>
      <SearchBox placeholder="Search" />
      <Img fixed={data.search.childImageSharp.fixed} />
    </SearchWrapper>
  )
}

export default Search
