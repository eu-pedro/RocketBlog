import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 12.5rem;

  background-color: ${(props) => props.theme['dark-footer']};
  color: ${(props) => props.theme['light-purple']};
`

export const ContainerLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
`

export const ContainerInfoTop = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 0.875rem;

  margin-bottom: 0.2rem;
`
export const ContainerInfoBottom = styled.div`
  display: flex;
  gap: 1.4rem;
  font-size: 0.875rem;
  margin-bottom: 0.4rem;
`
export const EndText = styled.span`
  font-size: 0.8rem;
`
