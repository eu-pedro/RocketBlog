import styled from 'styled-components'
import { device } from '../../styles/responsive/media'

export const Hero = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
  margin: 3.75rem auto 0;
  gap: 8.125rem;

  @media ${device.laptop} {
    margin-bottom: 2rem;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 35.5625rem;

  @media ${device.laptop} {
    align-items: flex-start;
    margin: 0 auto;
    max-width: 40rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const InformationText = styled.div`
  font-size: 1rem;
  margin: 0.998125rem 0;
  @media ${device.laptop} {
    font-size: 0.8rem;
  }
`
export const TitleHeading = styled.h3`
  color: ${(props) => props.theme['purple-bg']};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`
