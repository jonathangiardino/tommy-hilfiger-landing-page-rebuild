import React from "react"
import styled from "styled-components"

// COMPONENTS
import TopNav from "./TopNav"
import MainNav from "./MainNav"

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 7rem;
`

const Header = () => (
  <HeaderWrapper>
    <TopNav />
    <MainNav />
  </HeaderWrapper>
)

export default Header
