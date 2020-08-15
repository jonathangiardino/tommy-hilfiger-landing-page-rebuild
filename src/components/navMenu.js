import React from "react"
import styled from "styled-components"

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  position: absolute;
  left: 50%;
  margin-left: -25%;
`

const NavItem = styled.h4`
  text-transform: uppercase;
  color: #62759d;
  padding: 0 1.4rem;
  font-size: 0.9rem;
`

const NavMenu = () => {
  const menuItems = ["women", "men", "kids", "label", "sale"]
  return (
    <MenuWrapper>
      {menuItems.map(item => (
        <NavItem>{item}</NavItem>
      ))}
    </MenuWrapper>
  )
}

export default NavMenu
