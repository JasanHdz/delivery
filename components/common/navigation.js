import React from 'react'
import styled from 'styled-components'
import Wrapper from './wrapper'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import Menu from './menu'

const MenuStyled = styled(Menu)`
  
`

const NavigationStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  /* padding: 1em 0; */
  .toogle-button {
    position: relative;
    z-index: 3;
    /* background-color: var(--primary);
    border: 10px solid var(--primary); */
    margin-left: -10px;
    margin-top: -10px;
    border-radius: 50%;
    > * {
      display: inline;
      vertical-align: middle;
    }
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
`

function Navigation() {
  return (
    <NavigationStyled>
      <Wrapper>
        <input className="checkbox" type="checkbox" id="toogle-button" name="active" />
        <label htmlFor="toogle-button" className="toogle-button">
          <FiMenu className="open" size={25} color="white" />
          <MdClose className="close" size={25} color="white" />
        </label>
        <MenuStyled />
      </Wrapper>
    </NavigationStyled>
  )
}

export default Navigation