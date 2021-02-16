import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Container from './wrapper'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import Menu from './menu'

const MenuStyled = styled(Menu)``

const Wrapper = styled(Container)`
  @media screen and (min-width: 1024px) {
    padding: 12px 1rem;
  }
`

const NavigationStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  ${({ active }) => (active ? 'right: 0;' : 'right: initial;')};
  .toogle-button {
    position: relative;
    z-index: 3;
    .close {
      display: none;
    }
  }
  .checkbox {
    display: none;
  }
  .close, .open {
    cursor: pointer;
    user-select: none;
  } 
  .checkbox:checked {
    ~ .toogle-button {
      .close {
        display: inline;
      }
      .open {
        display: none;
      }
    }
    ~ ${MenuStyled} {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1024px) {
    position: sticky;
    left: 0;
    right: 0;
    background-color: white;
    .toogle-button {
      display: none;
    }
  }
`

function Navigation() {
  const element = useRef(null);
  const [active, setActive] = useState(false)
  const handleChange = (event) => {
    setActive(event.target.checked)
  }
  return (
    <NavigationStyled active={active}>
      <Wrapper>
        <input onChange={handleChange} ref={element} className="checkbox" type="checkbox" id="toogle-button" name="active" />
        <label htmlFor="toogle-button" className="toogle-button">
          <FiMenu className="open" size={26} color="#262626" />
          <MdClose className="close" size={26} color="#262626" />
        </label>
        <MenuStyled />
      </Wrapper>
    </NavigationStyled>
  )
}

export default Navigation