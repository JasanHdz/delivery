import React from 'react'
import { useRouter } from 'next/router'
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
    url: '/contact'
  },
  {
    title: 'Iniciar sesión',
    url: '/login'
  },
]

const Anchor = styled.a`
  color: ${({ color }) => color || 'initial'};
`

const MenuStyled = styled.nav`
  padding: 56px 0 0 1rem;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  max-width: 230px;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  overflow-y: auto;
  transform: translateX(-230px);
  transition: 0.3s transform;

  display: flex;
  flex-direction: column;
  
  .items {
    padding: 0;
    li {
      margin-left: -1rem;
    }
    li:hover {
      background-color: #A79D9D;
    }
  }
  .item {
    text-transform: uppercase;
    display: block;
    padding: 1rem;
  }
`

function Menu({ className }) {
  const pathname = useRouter().asPath
  console.log(pathname)
  return (
    <MenuStyled className={className}>
      <Logo />
      <ul className="items">
        {links.map(({ title, url }, index) => (
          <li>
            <Link key={index} href={url}>
              <Anchor color={pathname === url && 'var(--primary)'} className="item">{title}</Anchor>
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  )
}

export default Menu