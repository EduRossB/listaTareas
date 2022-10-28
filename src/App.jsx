import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <Container className="my-5">
      <h1 className="display-5 text-center">Lista de Tareas</h1>
      <hr />
      <FormularioTarea></FormularioTarea>
    </Container>
  );
}

export default App;
