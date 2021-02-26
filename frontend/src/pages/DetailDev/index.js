import React, { useState, useEffect } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import api from '../../services/api'
import { Container } from './styles'

const DetailDev = () => {
  const id = localStorage.getItem('dev_id')

  const [name, setName] = useState('')
  const [sexo, setSexo] = useState('M')
  const [age, setAge] = useState('')
  const [hobby, setHobby] = useState('')
  const [datebirth, setDatebirth] = useState('')

  useEffect(() => {
    api.get(`developers/${id}`).then(res => {
      setName(res.data.name)
      setAge(res.data.age)
      setSexo(res.data.sexo)
      setDatebirth(res.data.datebirth)
      setHobby(res.data.hobby)
    })
  }, [])

  const clearLocalStorage = () => {
    localStorage.clear()
  }

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="NexLab" />
          <h1>Informações</h1>
          <p>NexLab a chave apra o sucesso.</p>
          <Link
            onClick={clearLocalStorage}
            to="/all/devs"
            style={{ color: '#8257e6' }}
          >
            <FiArrowLeft size={16} />
            Voltar para a lista
          </Link>
        </div>
        <form>
          <input value={name} readOnly />
          <input type="number" value={age} readOnly />
          <input value={sexo} readOnly />
          <input type="date" value={datebirth} readOnly />
          <textarea value={hobby} readOnly />
        </form>
      </Container>
    </>
  )
}

export default DetailDev
