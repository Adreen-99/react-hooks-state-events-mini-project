import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || "Code");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { 
      text: text, category: category};

    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[1] || "Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        placeholder="New tasks details"
        value={text}
        onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {categories
          .filter((cat) => cat !== "All") // ✅ remove "All"
          .map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
