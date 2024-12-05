import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import './global.ts'
import temaPrincipal from './containers/themes/principal'
import { EstiloGlobal, Container } from './global'

function App() {
  return (
    <ThemeProvider theme={temaPrincipal}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
