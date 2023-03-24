import { useEffect } from 'react'
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
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

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
