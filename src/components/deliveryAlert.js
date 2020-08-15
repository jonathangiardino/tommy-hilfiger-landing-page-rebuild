import React from "react"
import styled from "styled-components"

const DeliveryMessage = styled.div`
  font-family: "Old Standard TT";
  font-size: 1rem;
  font-weight: bold;
  color: #62759d;
  width: 50vw;
  text-align: center;
  width: 50vw;
  position: absolute;
  left: 50%;
  margin-left: -25%;
`

const DeliveryAlert = () => {
  return (
    <DeliveryMessage>
      Enjoy Free Delivery on all orders over £50
    </DeliveryMessage>
  )
}

export default DeliveryAlert
