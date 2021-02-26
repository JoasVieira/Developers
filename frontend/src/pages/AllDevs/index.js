import React, { useEffect, useState } from 'react'
import {
  FiEdit,
  FiInfo,
  FiLogOut,
  FiTrash2,
  FiArrowLeft,
  FiArrowRight
} from 'react-icons/fi'
import { Link as Li, useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import Link from '../../components/Link'
import api from '../../services/api'
import { Container, Header, Footer } from './styles'

const AllDevs = () => {
  const history = useHistory()

  const [devs, setDevs] = useState([])
  const [totalDevs, setTotalDevs] = useState(0)
  const [pages, setPages] = useState([])

  useEffect(() => {
    api.get('developers').then(res => {
      setDevs(res.data)
      setTotalDevs(res.data.length)

      const totalPages = Math.ceil(totalDevs / 5)

      const arrayPages = []
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i)
      }

      setPages(arrayPages)
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

  const setIdInLocalStorage = async id => {
    localStorage.setItem('dev_id', id)
  }

  const handleDetailDev = async id => {
    setIdInLocalStorage(id)

    history.push('/detail/dev')
  }

  const handleUpdateDev = async id => {
    setIdInLocalStorage(id)

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
                <Li
                  title="detail"
                  to="/detail/dev"
                  onClick={() => handleDetailDev(dev.id)}
                >
                  <FiInfo size={16} color="#e1e1e6" />
                </Li>
                <Li
                  title="update"
                  to="/update/dev"
                  onClick={() => handleUpdateDev(dev.id)}
                >
                  <FiEdit size={16} color="#e1e1e6" />
                </Li>
                <FiTrash2
                  title="delete"
                  size={16}
                  color="#e1e1e6"
                  onClick={() => handleDeleteDev(dev.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <Footer>
        <FiArrowLeft size={18} color="#e1e1e6" />
        <ul>
          {pages.map(page => (
            <li key={page}>{page}</li>
          ))}
        </ul>
        <FiArrowRight size={18} color="#e1e1e6" />
      </Footer>
    </>
  )
}

export default AllDevs
