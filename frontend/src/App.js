import React from 'react'

import Routes from './Routes'
import GlobalStyles, { Container } from './styles/global'

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Routes />
    </Container>
  )
}

export default App
