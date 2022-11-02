import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  // aqui va la logica
  const listaLocalStorage =
    JSON.parse(localStorage.getItem("listaTarea")) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(listaLocalStorage);

  // CICLO DE VIDA
  useEffect(() => {
    console.log("Prueba ciclo de vida");
    localStorage.setItem("listaTarea", JSON.stringify(arregloTareas));
  }, [arregloTareas]);
  // use efect con corchetes vacios como segundo parametro hace que solo se active cuando se monta, no cuando se actualiza

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((item) => item !== nombre);
    setArregloTareas(arregloModificado);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex justify-content-between mb-3">
          {/* Form control es el input */}
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTareas
        propsArregloTareas={arregloTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </div>
  );
};

export default FormularioTarea;
