import { ThemeProvider } from 'styled-components'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Content } from './components/Main'
import { DefaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
      <Content />
      <Cards />
      <Footer />
    </ThemeProvider>
  )
}

export default App
