import { X } from 'phosphor-react'
import * as Styles from './styles'

interface MenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: (arg0: boolean) => void
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  return (
    <Styles.Container isVisible={menuIsVisible}>
      <X size={42} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <li>Home</li>
        <li>Sobre</li>
        <li>Categorias</li>
        <li>Contato</li>
      </nav>
    </Styles.Container>
  )
}
