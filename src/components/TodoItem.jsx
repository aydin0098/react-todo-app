import React from "react";

export default function TodoItem({
  todo,
  editId,
  updateValue,
  setUpdateValue,
  updateTodo,
  toggleDone,
  editTodo,
  deleteModal,
}) {
  const priorityColors = {
    high: "#ff3b3b",
    medium: "#ffcc00",
    low: "#00cc66",
  };

  return (
    <li
      className={todo.done ? "done" : ""}
      data-id={todo.id}
      key={todo.id}
    >
      {editId === todo.id ? (
        <input
          type="text"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
          onBlur={() => updateTodo(todo.id)}
          onKeyDown={(e) => e.key === "Enter" && updateTodo(todo.id)}
          autoFocus
        />
      ) : (
        <>
          <div
            className="priority-tag"
            style={{
              background:
                todo.priority === "high"
                  ? priorityColors.high
                  : todo.priority === "medium"
                  ? priorityColors.medium
                  : todo.priority === "low"
                  ? priorityColors.low
                  : "transparent",
            }}
          ></div>
          <span>{todo.text}</span>
        </>
      )}

      <div className="icons">
        <i
          className="fa-solid fa-check"
          title="انجام شد"
          onClick={() => toggleDone(todo.id)}
        ></i>

        <i
          className="fa-solid fa-pen"
          title="ویرایش"
          onClick={() => editTodo(todo.id)}
        ></i>

        <i
          className="fa-solid fa-trash"
          title="حذف"
          onClick={() => deleteModal(todo.id)}
        ></i>
      </div>
    </li>
  );
}
