import { useState, useEffect } from "react";
import createTask from "./createTask";
import "./Task.css";

const AddTask = (e) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const addTask = () => {
    createTask(task);
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="add-task">
        <form className="add-task-form">
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
          <button
            onClick={(e) => {
              addTask(e);
            }}
          >
            {" "}
            Add Task{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
