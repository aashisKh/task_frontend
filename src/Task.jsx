import "./Task.css";
import { useState } from "react";
import Modal from "./Modal";

const Task = ({ data }) => {
  let { title, description, _id, handleModal } = data;

  const handleDelete = async (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("data-task_id");
    e.target.parentElement.remove();
    let deleted = await fetch(`http://localhost:4000/task/delete_task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let deleted_res = await deleted.json();
    if (deleted_res.status) {
      alert(deleted_res.msg);
    }
  };

  return (
    <>
      <div className="task">
        <h1>{title}</h1>
        <p>{description}</p>
        <button
          data-task_id={_id}
          onClick={(e) => {
            handleModal(e);
          }}
        >
          Edit
        </button>
        <button
          data-task_id={_id}
          onClick={(e) => {
            handleDelete(e);
          }}
          className="delete"
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Task;
