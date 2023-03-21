import styled from 'styled-components'
import { device } from '../../styles/responsive/media'

export const CardContainer = styled.section`
  max-width: 90%;
  /* max-width: 1000px; */
  margin: 0 auto 3rem;

  display: flex;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
  gap: 1.875rem;

  @media ${device.mobile} {
    flex-wrap: wrap;
  }

  > div {
    margin: auto;
    @media ${device.mobile} {
      max-width: 80%;
      margin: auto;
    }
    > img {
      max-width: 23.125rem;
      height: 16.223125rem;
      transition: 0.4s ease-in;
      flex: 0 1 auto;

      @media ${device.mobile} {
        max-width: 100%;
        height: auto;
      }

      @media ${device.desktop} {
        width: 100%;
        height: auto;
      }

      filter: drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25));
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        filter: brightness(0.9) drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25));
      }
    }
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
