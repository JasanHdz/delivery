import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputPrimary = styled.input`
  ${({ fullWidth }) => (fullWidth
    ? `
      display: block;
      width: 100%;
    `
    : 'display: inline-block;')
  };
  border: 1px solid;
  border-radius: ${({ radius }) => `${radius}px`};
  padding: 1rem 0.35rem;
  font-size: 1rem;
  box-sizing: border-box;
`

function Input({ type, placeholder, ...otherProps }) {
  console.log(type)
  console.log(placeholder)
  return (
    <InputPrimary
      {...otherProps}
      type={type}
      placeholder={placeholder}
    />
  )
}

Input.defaultProps = {
  fullWidth: true,
  radius: 4,
}

Input.propTypes = {
  fullWidth: PropTypes.bool,
  radius: PropTypes.number,
}

export default Input

