import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from './logo'

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
    url: '/login'
  },
]

const MenuStyled = styled.nav`
  padding: 56px 0 0 1rem;
  background-color: var(--primary);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  max-width: 250px;
  box-sizing: border-box;
  z-index: 2;
  overflow-y: auto;
  transform: translateX(-250px);
  transition: 0.3s transform;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  .item {
    text-transform: uppercase;
    /* margin-left: 30px;
    &:first-child {
      margin-left: 0;
    } */
  }
  .item {
    display: inline-flex;
    padding: 1rem;
  }
`

function Menu({ className }) {
  return (
    <MenuStyled className={className}>
      <Logo />
      <ul className="items">
        {links.map(({ title, url }, index) => (
          <li>
            <Link key={index} href={url}>
              <a className="item">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  )
}

export default Menu