import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Content } from './components/Main'
import { DefaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default App
