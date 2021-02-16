import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Wrapper from 'common/wrapper'
import Background from 'common/background'
import usePhoneDimension from 'hooks/use-phone-dimension'
import { SecondaryButton } from 'common/button'

const HeroStyled = styled.section`
  /* height: 100vh;
  

  display: flex;
  justify-content: center;
  align-items: center;
  .description {
    max-width: 440px;
    .title {
      font-size: 64px;
      margin-bottom: 33px;
    }
  } */
  /* background-color: ; */
  padding: 52px 0 26px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 27px;
  img {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: 440px 1fr;
    align-items: center;
    height: inherit;
    .title {
      font-size: 64px;
      margin-bottom: 33px;
    }
  }
  
`

function Hero() {
  const isMobile = usePhoneDimension()
  const handleClick = () => {
    Router.push('/#nosotros')
  }
  return (
    <Background color="#F7F7F7" height="auto">
      <Wrapper>
        <HeroStyled>
          <div className="description">
            <h1 className="title">Paquetería & transporte al por menor</h1>
            {!isMobile && <SecondaryButton uppercase onClick={handleClick}>leer más</SecondaryButton>}
          </div>
          <img src="/montacargas.jpg" alt="montacarga" />
          {isMobile && <SecondaryButton uppercase onClick={handleClick}>leer más</SecondaryButton>}
        </HeroStyled>
      </Wrapper>
    </Background>
  )
}

export default Hero