import React from 'react'

import { Li } from './styles'

const Link = ({ children, to }) => {
  return <Li to={to}>{children}</Li>
}

export default Link
