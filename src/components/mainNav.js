import React from "react"
import styled from "styled-components"

const Row = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
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
  width: 5rem;
  height: 100%;
  background-color: salmon;
`

const MainNav = () => {
  return (
    <Row>
      <RowContainer>
        <Column />
        <Column />
        <Column />
      </RowContainer>
    </Row>
  )
}

export default MainNav
