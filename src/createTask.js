const createTask = async (task) => {
  let created = await fetch("http://localhost:9000/task/add_task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  let data = await created.json();
  console.log(data);
  if (data.status) {
    alert(data.msg);
    window.location.href = "/view_task";
  }
};

export default createTask;
