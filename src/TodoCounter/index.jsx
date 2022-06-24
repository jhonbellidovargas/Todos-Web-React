import React from "react";
import { TodoContext } from "../context/TodoContext";

import './TodoCounter.css'
// const estilo = {
//   color: 'red',
//   backgroundColor: 'yellow',
// }

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
