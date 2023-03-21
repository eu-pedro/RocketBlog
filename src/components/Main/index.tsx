import PostOne from '../../images/post-1.png'
import * as Styles from './styles'

export function Content() {
  return (
    <Styles.Hero>
      <Styles.LeftContent>
        <img src={PostOne} alt="" />
        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>

        <Styles.TitleHeading>Começando no ReactJS em 2022</Styles.TitleHeading>

        <Styles.InformationText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
          aenean sit vitae, sed tristique. Sed volutpat aenean.
        </Styles.InformationText>
      </Styles.LeftContent>

      <Styles.RightContent>
        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>
        <Styles.TitleHeading>
          Conheça as principais técnicas para conseguir uma vaga internacional
          em programação
        </Styles.TitleHeading>
        <Styles.InformationText>
          eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique.
        </Styles.InformationText>

        <hr />

        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>
        <Styles.TitleHeading>
          Veja a evolução do Front-end na prática
        </Styles.TitleHeading>
        <Styles.InformationText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque.
        </Styles.InformationText>
      </Styles.RightContent>
    </Styles.Hero>
  )
}
