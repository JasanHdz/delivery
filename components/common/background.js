import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Layout = styled.section`
  background-color: ${({ color }) => color};
  height: ${({ height }) => height};
`

function Background({ children, color, height, className, ...otherProps }) {
  return (
    <Layout {...otherProps} className={className} color={color} height={height}>{children}</Layout>
  )
}

Background.defaultProps = {
  color: 'var(--gray)',
  height: '100vh'
}

Background.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
}

export default Background