// src/components/App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(textToDelete) {
    setTasks(tasks.filter((task) => task.text !== textToDelete));
  }

  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
