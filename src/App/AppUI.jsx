import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../context/TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo,openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error: </p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {
        !!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
      <CreateTodoButton
        setOpenModal={setOpenModal}  
      />
    </>
  );
}

export { AppUI };
