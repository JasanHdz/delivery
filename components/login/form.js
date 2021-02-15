import React from 'react'
import styled from 'styled-components'
import Logo from 'common/logo'
import { SecondaryButton } from 'common/button'
import Input from 'common/input'
import Divider from 'common/divider'

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: white;
  opacity: 0.5;
  height: calc(100vh - 2rem);

  @media screen and (min-width: 550px) {
    background: transparent;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const FormStyled = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 550px) {
    padding: 50px 60px;
    width: 440px;
    height: 510px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 6px;
    opacity: 0.7;
  }
`

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('se intento recargar la página')
  }
  return (
    <Container>
      <FormStyled onSubmit={handleSubmit} method="POST">
        <Logo />
        <Divider marginVertical={22.5} />
        <Input type="text" placeholder="Correo electrónico" />
        <Divider marginVertical={17.5} />
        <Input type="password" placeholder="Contraseña" />
        <Divider marginVertical={22.5} />
        <SecondaryButton uppercase>iniciar sesión</SecondaryButton>
      </FormStyled>
    </Container>
  )
}

export default Form