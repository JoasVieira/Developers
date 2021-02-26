import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import api from '../../services/api'
import { Container } from './styles'

const NewDev = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [sexo, setSexo] = useState('M')
  const [age, setAge] = useState('')
  const [hobby, setHobby] = useState('')
  const [datebirth, setDatebirth] = useState('')

  const handleRegister = async e => {
    e.preventDefault()

    const data = {
      name,
      sexo,
      age,
      hobby,
      datebirth
    }

    try {
      await api.post('developers', data)

      history.push('/all/devs')
    } catch (err) {
      alert('Erro ao cadastrar novo Dev, tente novamente.')
    }
  }

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="NexLab" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro. E entre no time de desenvolvedores de NexLab</p>
          <Link to="/" style={{ color: '#8257e6' }}>
            <FiArrowLeft size={16} />
            Voltar para a Home
          </Link>
        </div>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </>
  )
}

export default NewDev
