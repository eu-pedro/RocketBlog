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
  gap: 0.8rem;
  font-size: 0.875rem;
  margin-bottom: 0.2rem;

  cursor: pointer;
  > p {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    position: relative;
    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme['light-purple']};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.2s ease-in;
    }

    &:hover::after {
      width: 102%;
    }
  }
`
export const ContainerInfoBottom = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 0.875rem;
  margin-bottom: 0.4rem;

  cursor: pointer;
  > p {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    position: relative;
    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme['light-purple']};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.2s ease-in;
    }

    &:hover::after {
      width: 102%;
    }
  }
`
export const EndText = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
`
