import React, { useEffect, useState } from 'react'
import * as Style from './styled'
import { useNavigate } from 'react-router-dom'

export default function Repositories() {
  const [repositories, setRepositories] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const repositoriesNames = localStorage.getItem('repositoriesNames')
    if (repositoriesNames) {
      setRepositories(JSON.parse(repositoriesNames))
      console.log('entrou no if')
    } else {
      navigate('/')
      console.log('entrou no else')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Style.Container>
      <Style.Title>Repositories</Style.Title>
      <Style.List>
        {repositories.map(repository => (
          <Style.ListItem> {repository} </Style.ListItem>
        ))}
      </Style.List>
      <Style.LinkHome to="/"> Voltar </Style.LinkHome>
    </Style.Container>
  )
}
