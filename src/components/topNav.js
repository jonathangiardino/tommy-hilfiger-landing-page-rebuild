import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// COMPOONENTS
import MiniTopMenu from "./miniTopMenu"
import DeliveryAlert from "./deliveryAlert"

const Row = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
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
const Text = styled.a`
  text-decoration: none;
`
const Basket = styled.div`
  margin-left: -5px;
`

const TopNav = () => {
  const data = useStaticQuery(graphql`
    query {
      basket: file(relativePath: { eq: "basket.png" }) {
        childImageSharp {
          fixed(height: 18) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Row>
      <RowContainer>
        <Column>
          <MiniTopMenu
            left={<Text>UK/GBP (£)</Text>}
            center={<Text>Stores</Text>}
            right={<Text>Customer Service</Text>}
          />
        </Column>
        <Column>
          <DeliveryAlert />
        </Column>
        <Column>
          <MiniTopMenu
            left={<Text>Newsletter signup</Text>}
            center={<Text>Sign in / register</Text>}
            right={""}
          />
          <Basket>
            <Img fixed={data.basket.childImageSharp.fixed} />
          </Basket>
        </Column>
      </RowContainer>
    </Row>
  )
}

export default TopNav
