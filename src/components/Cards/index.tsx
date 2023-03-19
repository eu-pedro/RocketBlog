import FirstPost from '../../images/post-2.png'
import SecondPost from '../../images/post-3.png'
import ThirdPost from '../../images/post-4.png'
import * as Styles from './styles'

export function Cards() {
  return (
    <Styles.CardContainer>
      <div>
        <img src={FirstPost} alt="" />
        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>
        <Styles.TitleHeading>
          10 dicas para conseguir a vaga desejada
        </Styles.TitleHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique.{' '}
        </p>
      </div>

      <div>
        <img src={SecondPost} alt="" />
        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>
        <Styles.TitleHeading>
          Deixe seu código mais semântico com essas dicas
        </Styles.TitleHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique.{' '}
        </p>
      </div>
      <div>
        <img src={ThirdPost} alt="" />
        <Styles.InformationText>Janeiro 04, 2022</Styles.InformationText>
        <Styles.TitleHeading>
          Use essas dicas nas suas aplicações mobile
        </Styles.TitleHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique.{' '}
        </p>
      </div>
    </Styles.CardContainer>
  )
}
