const update = async (data, id) => {
  let updated = await fetch(`http://localhost:4000/task/update_task/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let res = await updated.json();
  console.log("the res", res);
  if (res) {
    alert(res.msg);
    console.log("Task updated successfully");
  }
};

export default update;
