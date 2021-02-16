import React from 'react'
import styled from 'styled-components'
import Card from './card-service'
import Wrapper from 'common/wrapper'
import Background from 'common/background'
import { MdLocalShipping, MdDirectionsBike } from 'react-icons/md'
import { FaMotorcycle } from 'react-icons/fa'

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
  margin: 11px 0 14px 0;
  display: grid;
  justify-content: center;
  grid-row-gap: 27px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: space-evenly;
    padding: 50px 0;
  }
  @media screen and (min-width: 900px) {
    padding: 120px 0;
    grid-template-columns: repeat(3, auto);
  }
`

function Services() {
  return (
    <BackgroundStyled color="var(--primary)" height="auto">
      <Wrapper>
        <ServicesStyled id="servicios">
          <Card name="automóvil" Icon={MdLocalShipping} />
          <Card name="motocicleta" Icon={FaMotorcycle} />
          <Card name="bicicleta" Icon={MdDirectionsBike} />
        </ServicesStyled>
      </Wrapper>
    </BackgroundStyled>
  )
}

export default Services