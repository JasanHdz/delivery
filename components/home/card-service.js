import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.article`
  /* width: 256px;
  height: 242px;
  padding: 40px;  */
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
`

function CardService({ name, figure }) {
  return (
    <CardStyled>
      <img src={figure} alt="" width="50" height="50" />
      <p>{name}</p>
    </CardStyled>
  )
}

export default CardService