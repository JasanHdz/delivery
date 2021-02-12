import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  min-height: 100vh;
  background-color: #5AA2BB;
  background-image: url('/home_full.jpg');
  background-position-x: center;
  background-size: cover;
` 

function Layout({ children }) {
  return <Background>{children}</Background>
}

export default Layout