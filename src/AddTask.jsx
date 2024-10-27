import { useState, useEffect } from "react";
import createTask from "./createTask";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const addTask = () => {
    createTask(task)
  }

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <label>Title</label>
        <input
          type="text"
          value={task.title}
          name="title"
          onChange={(e) => {
            handleForm(e);
          }}
        />
        <label> Description </label>
        <input
          type="text"
          value={task.description}
          name="description"
          onChange={(e) => {
            handleForm(e);
          }}
        />
      </form>
      <button onClick={addTask}> Add Task </button>
    </>
  );
};

export default AddTask;
