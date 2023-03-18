import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { DefaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
