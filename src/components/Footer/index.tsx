import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import * as Styles from './styles'

export function Footer() {
  return (
    <Styles.Footer>
      <Styles.ContainerLogos>
        <FacebookLogo size={32} cursor={'pointer'} />
        <InstagramLogo size={32} cursor={'pointer'} />
        <TwitterLogo size={32} cursor={'pointer'} />
      </Styles.ContainerLogos>

      <Styles.ContainerInfoTop>
        <p>Info</p>
        <span>•</span>
        <p>Support</p>
        <span>•</span>
        <p>Marketing</p>
      </Styles.ContainerInfoTop>
      <Styles.ContainerInfoBottom>
        <p>Terms of Use</p>
        <span>•</span>
        <p>Privacy Policy</p>
      </Styles.ContainerInfoBottom>

      <Styles.EndText>&copy; 2023 RocketBlog</Styles.EndText>
    </Styles.Footer>
  )
}
