import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await fetchTasks();
			setTasks(tasks);
		};

		getTasks();
	}, []);

	// fetch tasks
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();

		return data;
	};

	// fetch task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();

		return data;
	};

	// add task
	const addTask = async (task) => {
		// const id = Math.floor(Math.random() * 10000) + 1;
		// const newTask = { id, ...task };
		// setTasks([...tasks, newTask])

		const res = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		setTasks([...tasks, data]);
	};

	// delete task
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DELETE",
		});

		setTasks(tasks.filter((task) => task.id !== id));
	};

	// toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	return (
		<Router>
			<div className="container">
				<Header
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>

				<Route
					path="/"
					exact
					render={(props) => (
						<>
							{showAddTask && <AddTask onAdd={addTask} />}
							{tasks.length ? (
								<Tasks
									tasks={tasks}
									onDelete={deleteTask}
									onToggle={toggleReminder}
								/>
							) : (
								"No tasks"
							)}
						</>
					)}
				/>
				<Route path="/about" component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
