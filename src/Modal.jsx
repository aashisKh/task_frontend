import { useState, useEffect } from "react";
import "./Task.css";
import update from "./update";

const Modal = ({ data }) => {
  let { title, description, id } = data;

  const [task, setTask] = useState({
    title: title,
    description: description,
  });

  const handleModalForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("the", name, value);
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    update(task, id);
  };

  return (
    <div className="modal">
      <form className="modal_form">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => {
            handleModalForm(e);
          }}
        />
        <br></br>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={(e) => {
            handleModalForm(e);
          }}
        />
        <button onClick={handleUpdate}> Update </button>
      </form>
    </div>
  );
};

export default Modal;
