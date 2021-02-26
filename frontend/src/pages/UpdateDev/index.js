import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import api from '../../services/api'
import { Container } from './styles'

const UpdateDev = () => {
  const history = useHistory()

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
      setDatebirth(res.data.datebirth)
      setHobby(res.data.hobby)
    })
  }, [])

  const clearLocalStorage = () => {
    localStorage.clear()
  }

  const handleUpdate = async e => {
    e.preventDefault()

    const data = {
      name,
      sexo,
      age,
      hobby,
      datebirth
    }

    try {
      await api.put(`developers/${id}`, data)

      clearLocalStorage()
      history.push('/all/devs')
    } catch (err) {
      alert('Erro ao atualizar Dev, tente novamente.')
    }
  }

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="NexLab" />
          <h1>Atualização de Cadastro</h1>
          <p>
            Faça sua atualização de cadastro. NexLab: o caminho mais fácil nem
            sempre é o melhor
          </p>
          <Link to="/" onClick={clearLocalStorage} style={{ color: '#8257e6' }}>
            <FiArrowLeft size={16} />
            Voltar para a Home
          </Link>
        </div>
        <form onSubmit={handleUpdate}>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
          <select
            name="gender"
            id="gender"
            defaultValue={sexo}
            onChange={e => setSexo(e.target.value)}
          >
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <input
            type="date"
            placeholder="Data de Nascimento"
            value={datebirth}
            onChange={e => setDatebirth(e.target.value)}
            required
          />
          <textarea
            placeholder="Hobby"
            value={hobby}
            onChange={e => setHobby(e.target.value)}
            required
          />
          <button type="submit">Atualizar</button>
        </form>
      </Container>
    </>
  )
}

export default UpdateDev
