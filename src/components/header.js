import React from "react"
import styled from "styled-components"

// COMPONENTS
import TopNav from "./TopNav"
import MainNav from "./MainNav"

const HeaderWrapper = styled.div`
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
