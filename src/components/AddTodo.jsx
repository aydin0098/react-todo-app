import React from "react";

export default function AddTodo({
  inputValue,
  setInputValue,
  addTodo,
  selectedPriority,
  setSelectedPriority,
  editId,
  updatePriority,
  setUpdatePriority
}) {
  const handlePriorityClick = (level) => {
    if (editId) setUpdatePriority(level);
    else setSelectedPriority(level);
  };

  const currentPriority = editId ? updatePriority : selectedPriority;

  return (
    <div className="input-container">
      <div className="input-row">
        <input
          type="text"
          placeholder="کار جدید ... "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>افزودن</button>
      </div>

      <div className="priority-selector">
        {["high", "medium", "low"].map((level) => (
          <div
            key={level}
            className={`priority-circle ${level} ${currentPriority === level ? "active" : ""}`}
            data-tooltip={
              level === "high" ? "فوری" : level === "medium" ? "معمولی" : "کم‌اهمیت"
            }
            onMouseDown={(e) => editId && e.preventDefault()}
            onClick={() => handlePriorityClick(level)}
          ></div>
        ))}
      </div>
    </div>
  );
}
