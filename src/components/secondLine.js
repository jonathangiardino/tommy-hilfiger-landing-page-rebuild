import React from "react"
import styled from "styled-components"

// COMPONENTS
import TextBox from "./textBox.js"

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 2.8rem 0;
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

const SecondLine = () => {
  return (
    <Line>
      <TextBox />
      <Letter>L</Letter>
      <Letter>.</Letter>
      <Letter>A</Letter>
      <Letter>.</Letter>
    </Line>
  )
}

export default SecondLine
