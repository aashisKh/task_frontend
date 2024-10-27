const fetchTask = async () => {
  console.log("Function called");

  try {
    const allTask = await fetch("http://localhost:4000/task/get_task", {
      method: "GET",
    });

    // Check if the response is OK
    if (!allTask.ok) {
      throw new Error(`HTTP error! Status: ${allTask.status}`);
    }
    return allTask.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};

export default fetchTask;
