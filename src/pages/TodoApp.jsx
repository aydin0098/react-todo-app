import React, { useEffect, useState } from "react";
import "../style.css";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";
import ConfirmModal from "../components/Modal/ConfirmModal";
import useLocalStorage from "../hooks/useLocalStorage";
import AddTodo from "../components/AddTodo";
import FilterBar from "../components/FilterBar";
import TodoList from "../components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [updateValue, setUpdateValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [todoDelete, setTodoDelete] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [updatePriority, setUpdatePriority] = useState("");

  //Add todo
  const addTodo = () => {
    const value = inputValue.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
      priority: selectedPriority || "none",
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    setSelectedPriority("");
  };

  //Toggle Done
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  //Edit Todo
  const editTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo.done) return;
    setEditId(id);
    setUpdateValue(todo.text);
    setUpdatePriority(todo.priority);
  };

  //Update Todo
  const updateTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: updateValue, priority: updatePriority } : t
      )
    );
    setEditId(null);
    setUpdateValue("");
    setUpdatePriority("");
  };

  //Open Delete Modal
  const deleteModal = (id) => {
    setModalType("deleteTodo");
    setModalMessage("آیا مطمئنی می‌خوای این کار رو حذف کنی؟");
    setTodoDelete(id);
    setShowModal(true);
  };
  return (
    <div className="todo-app">
      <ParticlesBackground />
      <h1>برنامه کارها</h1>

      <AddTodo
        {...{
          inputValue,
          setInputValue,
          addTodo,
          selectedPriority,
          setSelectedPriority,
          editId,
          updatePriority,
          setUpdatePriority,
        }}
      />

      <FilterBar {...{ filter, setFilter, search, setSearch }} />

      <TodoList
        todos={todos}
        filter={filter}
        search={search}
        toggleDone={toggleDone}
        editTodo={editTodo}
        deleteModal={deleteModal}
        editId={editId}
        updateValue={updateValue}
        setUpdateValue={setUpdateValue}
        updateTodo={updateTodo}
      />

      {/* Clear Mode */}
      {todos.some((t) => t.done) && (
        <button
          id="clearDoneBtn"
          className="clear-btn"
          onClick={() => {
            setModalType("deleteAll");
            setModalMessage(
              "آیا مطمئنی می‌خوای همه‌ی کارهای انجام‌شده رو حذف کنی؟"
            );
            setShowModal(true);
          }}
        >
          🧹 پاک کردن کارهای انجام‌شده
        </button>
      )}

      {/* Modal */}

      {showModal && (
        <ConfirmModal
          onConfirm={() => {
            if (modalType == "deleteAll") {
              setTodos(todos.filter((t) => !t.done));
            } else if (modalType == "deleteTodo") {
              setTodos(todos.filter((t) => t.id !== todoDelete));
            }

            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
          confirmMessage={modalMessage}
        />
      )}
    </div>
  );
}
