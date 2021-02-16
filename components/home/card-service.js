import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.article`
  width: 150px;
  height: 150px;
  border: 3px solid;
  border-radius: 6px;
  box-sizing: border-box;
  p {
    text-transform: uppercase;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .icon {
    height: 50px;
    width: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 256px;
    height: 242px;
    padding: 40px; 
    :last-child {
      grid-column-start: 1;
      grid-column-end: 3;
      justify-self: center;
    }
    .icon {
      height: 90px;
      width: 90px;
    }
  }
  @media screen and (min-width: 900px) {
    :last-child {
      justify-self: initial;
      grid-column-start: initial;
      grid-column-end: initial;
    }
  }
`

function CardService({ name, Icon }) {
  return (
    <CardStyled>
      <Icon className="icon" />
      <p>{name}</p>
    </CardStyled>
  )
}

export default CardService