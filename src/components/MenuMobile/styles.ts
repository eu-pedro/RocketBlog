import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${(props) => props.theme['light-purple']};

  background-color: rgba(17, 18, 17, 0.95);
  background: linear-gradient(
    34deg,
    ${(props) => props.theme['dark-bg']} 0%,
    rgba(17, 18, 17, 0.95)
  );

  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    > li {
      list-style: none;
    }
  }
`
