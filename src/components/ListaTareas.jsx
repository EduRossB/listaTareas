import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsArregloTareas, borrarTarea}) => {
  return (
    <div>
      <ListGroup>
        {
          propsArregloTareas.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea }></ItemTarea>)
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
