import React from "react"
import styled from "styled-components"

const Left = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 71rem;
  height: 16rem;
  background-color: lightgrey;
  z-index: 0;
  opacity: 0.2;
`
const Right = styled.div`
  position: absolute;
  top: -5rem;
  right: 10.25rem;
  width: 40rem;
  height: 10rem;
  background-color: lightgrey;
  z-index: 0;
  opacity: 0.2;
`

const Top = styled.div`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 4rem;
  background-color: lightgrey;
  opacity: 0.2;
`

export const BoxShadowLeft = () => {
  return <Left></Left>
}

export const BoxShadowRight = () => {
  return <Right></Right>
}

export const BoxShadowTop = () => {
  return <Top></Top>
}
