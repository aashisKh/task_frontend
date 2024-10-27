import "./Task.css";
import { useState } from "react";

const Task = ({ data }) => {
  let { title, description } = data;


  return (
    <>
    <div className="task">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Edit</button>
    </div>
    </>

  );
};

export default Task;
