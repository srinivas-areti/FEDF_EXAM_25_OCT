import React from "react";
import TaskItem from "./TaskItem";
const TaskList = ({ tasks, onDelete, onToggle }) => {
return (
<ul>
{tasks.map((task) => (
<TaskItem
key={task.id}
task={task}
onDelete={onDelete}
onToggle={onToggle}
/>
))}
</ul>
);
};
export default TaskList;