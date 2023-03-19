import { MagnifyingGlass, ArrowRight } from 'phosphor-react'
import FeaturedImage from '../../images/featured-image.png'
import * as Styles from './styles'
import Logo from '../../assets/Logo.svg'
import { DefaultTheme } from '../../styles/theme/default'

export function Header() {
  return (
    <Styles.Container>
      <Styles.Header>
        <img src={Logo} alt="" />
        <nav>
          <Styles.ListContainer>
            <li>Home</li>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Contato</li>
          </Styles.ListContainer>
        </nav>

        <Styles.FormContainer>
          <Styles.Input type="text" placeholder="Buscar" />
          <Styles.Button>
            <MagnifyingGlass size={32} color={'white'} />
          </Styles.Button>
        </Styles.FormContainer>
      </Styles.Header>

      <Styles.MainContainer>
        <div>
          <Styles.Title>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </Styles.Title>
          <Styles.DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{' '}
          </Styles.DescriptionText>

          <Styles.SeeMoreText>
            Veja mais
            <ArrowRight size={32} color={DefaultTheme.green} />
          </Styles.SeeMoreText>
        </div>

        <Styles.ImageContainer>
          <img src={FeaturedImage} alt="" />
        </Styles.ImageContainer>
      </Styles.MainContainer>
    </Styles.Container>
  )
}