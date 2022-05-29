import '../../App.css'
import React, { useState } from 'react'
import axios from 'axios'
import * as Style from './styled'
import { useNavigate } from 'react-router-dom'

function Home(props) {
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState (undefined)
  const navigate = useNavigate()
  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesNames = []
        repositories.map(repository => repositoriesNames.push(repository.name))
        localStorage.setItem(
          'repositoriesNames',
          JSON.stringify(repositoriesNames)
        )
        setErro(false)
        navigate('/repositories')
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (
    <Style.HomeContainer>
      <Style.Content>
      <h1>{props.title}</h1>
      <Style.Input
        value={usuario}
        placeholder="Usuário"
        className="usuarioInput"
        onChange={e => setUsuario(e.target.value)}
      />
      <Style.Button onClick={handlePesquisa} type="button" className="">
        Pesquisar
      </Style.Button>      
    </Style.Content>
    {erro ? <Style.ErrorMessage> Oops, ocorreu um erro! Tente novamente. </Style.ErrorMessage> : ""}
    </Style.HomeContainer>
    
  )
}

export default Home
