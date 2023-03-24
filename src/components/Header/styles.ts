import styled from 'styled-components'
import { device } from '../../styles/responsive/media'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  border-bottom: 3px solid ${(props) => props.theme.green};
  padding: 0 0 1.8rem 0;

  min-height: auto;
  background-color: ${(props) => props.theme['purple-bg']};
`
export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }

  @media ${device.tablet} {
    /* width: 100%; */
  }
`

export const ListContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  > li {
    list-style: none;
    color: ${(props) => props.theme.white};
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${(props) => props.theme.green};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.2s ease-in;
    }

    &:hover::after {
      width: 102%;
    }

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 2.75rem;
  width: auto;

  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

  @media ${device.tablet} {
    display: none;
  }
`

export const Input = styled.input`
  width: auto;
  height: 100%;
  width: 14.375rem;
  border: 0;
  background-color: ${(props) => props.theme['dark-bg']};
  padding: 0.875rem 0.875rem 0.875rem 1.603125rem;
  border-radius: 4px 0 0 4px;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  color: ${(props) => props.theme['light-purple']};

  &::placeholder {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;
    color: ${(props) => props.theme['light-purple']};
  }
  &:focus {
    margin-right: 2.2px;
    border-radius: 4px 4px 4px 4px;
  }
`
export const Button = styled.button`
  height: auto;
  min-width: 4.375rem;
  background-color: ${(props) => props.theme['button-bg']};
  border: 0;
  border-radius: 0px 4px 4px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    border-radius: 4px 4px 4px 4px;
  }
`

export const MainContainer = styled.main`
  width: 90%;
  margin: 0 auto;

  gap: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1092px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.375rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['button-bg']};
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
  @media ${device.mobile} {
    font-size: 2rem;
    text-align: left;
  }
`

export const BaseText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;

  line-height: 1.6875rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }

  @media ${device.mobile} {
    font-size: 0.9rem;
  }
`

export const DescriptionText = styled(BaseText)`
  color: ${(props) => props.theme['light-purple']};
  margin-bottom: 1.5rem;
`

export const SeeMoreText = styled(BaseText)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['button-bg']};
`

export const ImageContainer = styled.div`
  max-width: 35.625rem;
  max-height: auto;

  > img {
    width: auto;
    height: auto;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

    @media ${device.mobile} {
      width: 100%;
      height: auto;
    }
  }
`
