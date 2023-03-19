import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 3.75rem auto 0;
  gap: 8.125rem;
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 35.5625rem;
`
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const InformationText = styled.div`
  font-size: 1rem;
  margin: 0.998125rem 0;
`
export const TitleHeading = styled.h3`
  color: ${(props) => props.theme['purple-bg']};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`
