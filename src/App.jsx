import TaskView from "./TaskView";
import AddTask from "./AddTask";
import Home from "./Home";
import "./Task.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view_task">View Task</Link>
          </li>
          <li>
            <Link to="/add_task">Add Task</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/view_task" element={<TaskView />} />
        <Route path="/add_task" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;
