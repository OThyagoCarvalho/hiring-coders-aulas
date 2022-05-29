import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #111;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;

  &:hover {
    background: #333;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`


