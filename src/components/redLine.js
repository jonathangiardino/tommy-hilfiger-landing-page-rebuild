import React from "react"
import styled from "styled-components"

const Line = styled.div`
  position: absolute;
  left: 50%;
  height: 40rem;
  width: 0.1rem;
  background-color: #ff2424;
  bottom: 0;
  transform: rotate(-45deg);
  transform-origin: 20rem;
`

const RedLine = () => {
  return <Line></Line>
}

export default RedLine
