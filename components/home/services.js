import React from 'react'
import styled from 'styled-components'
import Card from './card-service'

const ServicesStyled = styled.section`
  height: 570px;
  background-color: var(--primary);

  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 100px;
  justify-content: center;
  align-items: center;
`

function Services() {
  return (
    <ServicesStyled id="servicios">
      <Card name="automóvil" figure="/icons/shipping-24px.svg" />
      <Card name="motocicleta" figure="/icons/dining-24px.svg" />
      <Card name="bicicleta" figure="/icons/bike-24px.svg" />
    </ServicesStyled>
  )
}

export default Services