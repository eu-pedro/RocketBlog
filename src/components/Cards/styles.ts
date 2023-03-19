import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 90%;
  margin: 0 auto 3rem;

  display: flex;
  gap: 1.875rem;

  > div > img {
    width: 23.125rem;
    height: 16.223125rem;
  }
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
