import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import Listadobebidas from "./components/Listadobebidas"
import ModalBebida from "./components/ModalBebida"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <Listadobebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
