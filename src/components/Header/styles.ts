import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: ${(props) => props.theme['purple-bg']}; */
`
export const Header = styled.header`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    list-style: none;
  }
`

export const FormContainer = styled.div`
  height: 2.75rem;
  width: 300px;
  display: flex;
  justify-content: center;
`

export const Input = styled.input`
  width: auto;
  height: 100%;
  width: 14.375rem;
`
export const Button = styled.button`
  height: auto;
  max-width: 4.375rem;
`
