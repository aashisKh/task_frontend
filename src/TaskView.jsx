import { useState, useEffect } from "react";
import fetchTask from "./fetchTask";
import Task from "./Task";
import "./Task.css";

const TaskView = () => {
  const [allTask, setAllTask] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const getAllTask = async () => {
    let { data } = await fetchTask();
    console.log(data);
    setAllTask((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getAllTask();
    // createTask();
  }, []);



  if (allTask?.length === 0) {
    return <div>No Task To display</div>;
  } else {
    return (
      <>
        <div className="task-list">
          {allTask?.map((task, index) => {
            const { title, description } = task;
            return <Task key={index} data={{ title, description }} />;
          })}
        </div>
      </>
    );
  }
};

export default TaskView;
