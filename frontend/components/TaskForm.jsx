import React, { useState } from "react";
const TaskForm = ({ onAddTask }) => {
const [title, setTitle] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
if (!title.trim()) return;
onAddTask(title);
setTitle("");
};
return (
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter a new task..."
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<button type="submit">Add Task</button>
</form>
);
};
export default TaskForm;