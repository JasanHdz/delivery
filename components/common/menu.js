import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from './logo'
import Wrapper from './wrapper'

const links = [
  {
    title: 'home',
    url: '/'
  },
  {
    title: 'nosotros',
    url: '/#nosotros'
  },
  {
    title: 'servicios',
    url: '/#servicios'
  },
  {
    title: 'contacto',
    url: '/'
  },
  {
    title: 'Iniciar sesión',
    url: '/'
  },
]

const MenuStyled = styled.nav`
  /* height: 80px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item {
    text-transform: uppercase;
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }
  }
`

function Menu() {
  return (
    <Wrapper>
      <MenuStyled>
        <Logo />
        <ul className="items">
          {links.map(({ title, url }, index) => (
            <Link key={index} href={url}>
              <a className="item">{title}</a>
            </Link>
          ))}
        </ul>
      </MenuStyled>
    </Wrapper>
  )
}

export default Menu