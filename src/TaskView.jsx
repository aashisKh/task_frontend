import { useState, useEffect } from "react";
import fetchTask from "./fetchTask";
import Task from "./Task";
import "./Task.css";
import Modal from "./Modal";

const TaskView = () => {
  const [allTask, setAllTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    id: "",
  });
  const getAllTask = async () => {
    let { data } = await fetchTask();
    setAllTask([]);
    setAllTask((prev) => [...prev, ...data]);
  };
  const handleModal = (e) => {
    let parent = e.target.parentElement;
    let id = e.target.getAttribute("data-task_id");
    let edit_title = parent.children[0].innerText;
    let edit_description = parent.children[1].innerText;
    setModalData((prev) => ({
      ...prev,
      title: edit_title,
      description: edit_description,
      id: id,
    }));

    setShowModal(!showModal);
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
        {showModal && <Modal data={modalData} />}
        <div className="task-list">
          {allTask?.map((task, index) => {
            const { title, description, _id } = task;
            return (
              <Task
                key={index}
                data={{ title, description, _id, handleModal }}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default TaskView;
