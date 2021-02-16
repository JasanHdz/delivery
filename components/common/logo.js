import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Box = styled.a`
  width: 112px;
  height: 44px;
  background-color: #A79D9D;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  margin: 0 auto;
  .box-title {
    text-transform: uppercase;
  }
`

function Logo({ className }) {
  return (
    <Link href="/">
      <Box className={className}>
        <p className="box-title">logistic</p>
      </Box>
    </Link>
  )
}

export default Logo