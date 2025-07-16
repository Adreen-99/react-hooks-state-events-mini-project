import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskTextToRemove) {
    const updatedTasks = tasks.filter(task => task.text !== taskTextToRemove);
    setTasks(updatedTasks);
  }

  function handleCategoryChange(category){
    setSelectedCategory (category);

  }

  const visibleTasks = tasks.filter((task) => 
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
      <NewTaskForm categories={CATEGORIES}
        onTaskFormSubmit={(newTask) => setTasks([...tasks, newTask])}/>
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
