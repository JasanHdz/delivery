import React from 'react'
import styled from 'styled-components'
import Card from './card-service'
import Wrapper from 'common/wrapper'
import Background from 'common/background'

const BackgroundStyled = styled(Background)`
  position: relative;
  &:before {
    display: block;
    content: '';
    border-top: 1px solid #F7F7F7;
    height: 27px;
    background-color: #F7F7F7;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
  }
`

const ServicesStyled = styled.section`
  background-color: var(--primary);

  /* display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 100px;
  justify-content: center;
  align-items: center; */
  margin-top: 11px;
  display: grid;
  justify-content: center;
  grid-row-gap: 27px;
`

function Services() {
  return (
    <BackgroundStyled color="var(--primary)" height="588px">
      <Wrapper>
        <ServicesStyled id="servicios">
          <Card name="automóvil" figure="/icons/shipping-24px.svg" />
          <Card name="motocicleta" figure="/icons/dining-24px.svg" />
          <Card name="bicicleta" figure="/icons/bike-24px.svg" />
        </ServicesStyled>
      </Wrapper>
    </BackgroundStyled>
  )
}

export default Services