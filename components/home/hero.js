import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../common/button'

const HeroStyled = styled.section`
  height: 100vh;
  background-color: #F7F7F7;

  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    max-width: 440px;
    .title {
      font-size: 64px;
      margin-bottom: 33px;
    }
  }
`


function Hero() {
  return (
    <HeroStyled>
      <div className="description">
        <h1 className="title">Paquetería & transporte al por menor</h1>
        <SecondaryButton uppercase>leer más</SecondaryButton>
      </div>
      <div>
        <img src="/montacargas.jpg" alt="montacarga" width="800" height="600" />
      </div>
    </HeroStyled>
  )
}

export default Hero