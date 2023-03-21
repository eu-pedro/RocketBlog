// import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Content } from './components/Main'
// import { MenuMobile } from './components/MenuMobile'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/theme/default'

export function App() {
  // const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  return (
    <ThemeProvider theme={DefaultTheme}>
      {/* <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      /> */}
      <Header /* setMenuIsVisible={setMenuIsVisible} */ />
      <Content />
      <Cards />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
