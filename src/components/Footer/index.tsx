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
        <p>Support</p>
        <p>Marketing</p>
      </Styles.ContainerInfoTop>
      <Styles.ContainerInfoBottom>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </Styles.ContainerInfoBottom>

      <Styles.EndText>C 2023 RocketBlog</Styles.EndText>
    </Styles.Footer>
  )
}
