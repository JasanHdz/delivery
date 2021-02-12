import React from 'react'
import styled from 'styled-components'
import Logo from 'common/logo'
import { SecondaryButton } from 'common/button'
import Input from 'common/input'
import Divider from 'common/divider'

const FormStyled = styled.form`
  width: 440px;
  height: 510px;
  background-color: white;
  opacity: 0.7;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0 auto; 
  padding: 50px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('se intento recargar la página')
  }
  return (
    <FormStyled onSubmit={handleSubmit} method="POST">
      <Logo />
      <Divider marginVertical={22.5} />
      <Input type="text" placeholder="Correo electrónico" />
      <Divider marginVertical={17.5} />
      <Input type="password" placeholder="Contraseña" />
      <Divider marginVertical={22.5} />
      <SecondaryButton uppercase>iniciar sesión</SecondaryButton>
    </FormStyled>
  )
}

export default Form