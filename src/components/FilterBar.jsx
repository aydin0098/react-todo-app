import React from "react";

export default function FilterBar({ filter, setFilter, search, setSearch }) {
  return (
    <div className="filter-container">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">همه</option>
        <option value="done">انجام‌شده</option>
        <option value="undone">انجام‌نشده</option>
        <option value="high">فوری</option>
        <option value="medium">معمولی</option>
        <option value="low">کم‌اهمیت</option>
      </select>

      <input
        type="text"
        placeholder="جستجو..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
