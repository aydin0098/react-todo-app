import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  search,
  toggleDone,
  editTodo,
  deleteModal,
  editId,
  updateValue,
  setUpdateValue,
  updateTodo,
}) {
  const filteredTodos = todos.filter((t) => {
    const matchSearch = t.text.includes(search);
    if (filter === "all") return matchSearch;
    if (filter === "done") return t.done && matchSearch;
    if (filter === "undone") return !t.done && matchSearch;
    return t.priority === filter && matchSearch;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editId={editId}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
          updateTodo={updateTodo}
          toggleDone={toggleDone}
          editTodo={editTodo}
          deleteModal={deleteModal}
        />
      ))}
    </ul>
  );
}
