import React, { useEffect, useState } from 'react'
import { FiEdit, FiLogOut, FiTrash2 } from 'react-icons/fi'
import { Link as Li, useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import Link from '../../components/Link'
import api from '../../services/api'
import { Container, Header } from './styles'

const AllDevs = () => {
  const history = useHistory()

  const [devs, setDevs] = useState([])

  useEffect(() => {
    api.get('developers').then(res => {
      setDevs(res.data)
    })
  }, [])

  const handleDeleteDev = async id => {
    try {
      await api.delete(`developers/${id}`)

      setDevs(devs.filter(dev => dev.id !== id))
    } catch (err) {
      alert('Erro ao deletar o dev, tente novamente.')
    }
  }

  const handleUpdateDev = async id => {
    localStorage.setItem('dev_id', id)

    history.push('/update/dev')
  }

  return (
    <>
      <Header>
        <img src={logo} alt="NexLab" />
        <div>
          <Link to="/new/dev">Cadastrar novo dev</Link>
          <Li to="/">
            <FiLogOut size={28} color="#8257e6" />
          </Li>
        </div>
      </Header>
      <Container>
        <h1>Devs Cadastrados</h1>
        <ul>
          {devs.map(dev => (
            <li key={dev.id}>
              <div>
                <strong>Nome: </strong>
                <p>{dev.name}</p>
              </div>
              <div>
                <strong>Idade: </strong>
                <p>{dev.age}</p>
              </div>

              <div>
                <strong>Nascimento: </strong>
                <p>{dev.datebirth}</p>
              </div>

              <div>
                <strong>Sexo: </strong>
                <p>{dev.sexo}</p>
              </div>
              <div>
                <strong>Hobby: </strong>
                <p>{dev.hobby}</p>
              </div>
              <div>
                <Li to="/update/dev" onClick={() => handleUpdateDev(dev.id)}>
                  <FiEdit size={16} color="#e1e1e6" />
                </Li>
                <FiTrash2
                  size={16}
                  color="#e1e1e6"
                  onClick={() => handleDeleteDev(dev.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default AllDevs
