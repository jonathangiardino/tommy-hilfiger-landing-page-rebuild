import React from "react"
import styled from "styled-components"

// COMPONENTS
import Logo from "./logo"
import NavMenu from "./navMenu"
import Search from "./search"

const Row = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid lightgrey;
`
const RowContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const MainNav = () => {
  return (
    <Row>
      <RowContainer>
        <Column>
          <Logo />
        </Column>
        <Column>
          <NavMenu />
        </Column>
        <Column>
          <Search />
        </Column>
      </RowContainer>
    </Row>
  )
}

export default MainNav
