import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <div>
      <Form>
        <Form.Group  className="d-flex justify-content-between mb-3" controlId="formBasicEmail">
            {/* Form control es el input */}
          <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default FormularioTarea;
