import { MagnifyingGlass, ArrowRight } from 'phosphor-react'
import FeaturedImage from '../../images/featured-image.png'

export function Header() {
  return (
    <section>
      <header>
        <h1>The Blog.</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Categorias</li>
            <li>Contato</li>
          </ul>
        </nav>

        <form action="">
          <input type="text" />
          <button>
            <MagnifyingGlass size={32} />
          </button>
        </form>
      </header>

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
    </section>
  )
}
