import React from 'react'

import logo from '../../assets/logo.png'
import Link from '../../components/Link'
import { Container } from './styles'

const Home = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="NexLab" />
        <section>
          <h1>Bem-Vindo</h1>
          <p>NexLab seja a mudança que deseja ver no mundo.</p>
        </section>
        <div>
          <Link to="/new/dev">Cadastre-se agora</Link>
          <Link to="/all/devs">Lista de Devs</Link>
        </div>
      </Container>
    </>
  )
}

export default Home
