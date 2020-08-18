import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
// COMPONENTS
import TextBox from "./textBox.js"

const Line = styled.div`
  width: 100%;
  display: flex;
  margin: 2.8rem 0;
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

const SecondLine = () => {
  return (
    <Line>
      <TextBox />
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1,
        }}
      >
        L
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
        .
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
        A
      </Letter>
      <Letter
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1.6,
        }}
      >
        .
      </Letter>
    </Line>
  )
}

export default SecondLine
