import { MagnifyingGlass, ArrowRight } from 'phosphor-react'
import FeaturedImage from '../../images/featured-image.png'
import * as Styles from './styles'

export function Header() {
  return (
    <Styles.Container>
      <Styles.Header>
        <h1>The Blog.</h1>
        <nav>
          <Styles.ListContainer>
            <li>Home</li>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Contato</li>
          </Styles.ListContainer>
        </nav>

        <Styles.FormContainer>
          <Styles.Input type="text" />
          <button>
            <MagnifyingGlass size={32} />
          </button>
        </Styles.FormContainer>
      </Styles.Header>

      <main>
        <div>
          <h2>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{' '}
          </p>

          <p>Veja mais</p>
          <span>
            <ArrowRight size={32} />
          </span>
        </div>

        <div>
          <img src={FeaturedImage} alt="" />
        </div>
      </main>
    </Styles.Container>
  )
}
