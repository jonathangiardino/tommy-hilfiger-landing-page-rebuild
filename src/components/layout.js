import React from "react"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  width: 1300px;
  height: 1750px;
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default Layout
