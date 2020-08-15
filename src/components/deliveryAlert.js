import React from "react"
import styled from "styled-components"

const DeliveryMessage = styled.div`
  font-family: "Old Standard TT";
  font-size: 1.1rem;
  color: #43567f;
`

const DeliveryAlert = () => {
  return (
    <DeliveryMessage>
      Enjoy Free Delivery on all orders over £50
    </DeliveryMessage>
  )
}

export default DeliveryAlert
