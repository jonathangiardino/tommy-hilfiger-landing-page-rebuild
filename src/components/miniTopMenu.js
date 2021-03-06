import React from "react"
import styled from "styled-components"

const MiniMenu = styled.div`
  display: flex;
  list-style-type: none;
  width: 100%;
  }
`
const MiniMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.6rem;
  text-transform: uppercase;
  color: #62759d;
`

const Divider = styled.div`
  font-size: 0.7rem;
`

const MiniTopMenu = ({ left, center, right }) => {
  return (
    <MiniMenu>
      <MiniMenuItem>{left}</MiniMenuItem>
      <Divider>|</Divider>
      <MiniMenuItem>{center}</MiniMenuItem>
      <Divider>|</Divider>
      {right && <MiniMenuItem>{right}</MiniMenuItem>}
    </MiniMenu>
  )
}

export default MiniTopMenu
