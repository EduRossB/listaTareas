import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  // aqui va la logica

  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };

const borrarTarea = (nombre)=>{
  let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
  setArregloTareas(arregloModificado)
}

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

      <ListaTareas propsArregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default FormularioTarea;
