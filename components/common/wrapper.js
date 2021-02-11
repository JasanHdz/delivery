
import React from 'react'
import styled from 'styled-components'

const WraperStyled = styled.div`
  margin: 0 auto;
  padding: 1rem 2rem;
  max-width: ${({ maxWidth }) => maxWidth || '1280px'};
  width: 100%;
`

function Wrapper({ children, maxWidth, className }) {
  return (
    <WraperStyled className={className} maxWidth={maxWidth}>
      {children}
    </WraperStyled>
  )
}

export default Wrapper