import React from "react"
import styled from "styled-components"

import { motion } from "framer-motion"

const BoxWrapper = styled(motion.div)`
  position: relative;
  width: 40%;
  height: 21.4rem;
  margin-top: -0.5rem;
`

const Title = styled.h1`
  margin: 0;
  font-family: "Hero IC Condensed Medium";
  font-size: 3.5rem;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  &.red {
    color: #ff2424;
  }
`

const Subtitle = styled.h1`
  margin: 1.8rem 0 0 0;
  width: 24ch;
  font-family: "Hero IC Condensed Medium";
  font-size: 1.6rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  &.red {
    color: #ff2424;
  }
`

const Paragraph = styled.p`
  margin: 1.2rem 0 0 0;
  width: 24ch;
  font-size: 0.9rem;
`
const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12rem;
  padding: 0.5rem;
  background-color: #ff2424;
  color: white;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: none;
  border-radius: 2rem;
  font-family: "Hero IC Condensed Medium";
`

const TextBox = () => {
  return (
    <BoxWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Title>Spring</Title>
      <Title className="red">2017</Title>
      <Subtitle>With Anwar Hadid &amp; Sophia Richie</Subtitle>
      <Paragraph>
        Engineered for perfect form and exeptional fit – whatever you do in
        them.
      </Paragraph>
      <Button>View All Products</Button>
    </BoxWrapper>
  )
}

export default TextBox
