import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.section<ContainerProps>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  backdrop-filter: blur(2px);

  transform: translateY(50px);
  opacity: 0;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['light-purple']};

  background-color: rgba(17, 18, 17, 0.95);
  background: linear-gradient(
    34deg,
    ${(props) => props.theme['dark-bg']} 0%,
    rgba(17, 18, 17, 0.95)
  );

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 4rem;
    right: 1rem;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    transform: scale(0);
    transition: 0.7s;
    > li {
      list-style: none;
    }
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;

      transform: translateY(0);

      nav {
        transform: scale(1);
      }
    `}
`
