import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.article`
  width: 256px;
  height: 242px;
  border: 3px solid;
  border-radius: 6px;
  padding: 40px; 
  p {
    text-transform: uppercase;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

function CardService({ name, figure }) {
  return (
    <CardStyled>
      <img src={figure} alt="" width="90" height="90" />
      <p>{name}</p>
    </CardStyled>
  )
}

export default CardService