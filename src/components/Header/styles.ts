import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  border-bottom: 3px solid ${(props) => props.theme.green};

  min-height: 36.6875rem;
  background-color: ${(props) => props.theme['purple-bg']};
`
export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  > li {
    list-style: none;
    color: ${(props) => props.theme.white};
  }

  > li:nth-child(1) {
    border-left: 2px solid ${(props) => props.theme.green};
    padding-left: 3px;
  }
`

export const FormContainer = styled.div`
  height: 2.75rem;
  width: 300px;
  display: flex;
  justify-content: center;

  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
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
`

export const MainContainer = styled.main`
  width: 90%;
  margin: 0 auto;

  gap: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.375rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['button-bg']};
`

export const BaseText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;

  line-height: 1.6875rem;
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
  width: 35.625rem;
  height: 21.625rem;

  > img {
    width: auto;
    height: auto;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
    /* background: rgba(0, 0, 0, 0.2); */
  }
`
