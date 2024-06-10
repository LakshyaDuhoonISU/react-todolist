import { useState } from 'react'
import styles from './ToDoList.module.css'

function ToDoList() {

    let [tasks, setTasks] = useState([]);
    let [newTask, setNewTask] = useState("");

    function handleInput() {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        let newTasks = tasks.filter((_, i) => {
            return i !== index;
        });
        setTasks(newTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            let newTasks = [...tasks];
            let temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            setTasks(newTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            let newTasks = [...tasks];
            let temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTasks(newTasks);
        }
    }

    return (
        <div className={styles.container}>
            <h1>To Do List</h1>
            <div>
                <input type='text' placeholder='Enter a task' onChange={handleInput} value={newTask} />
                <button className={styles.addBtn} onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}><span className={styles.text}>{task}</span>
                            <button className={styles.delBtn} onClick={() => { deleteTask(index) }}>Delete</button>
                            <button className={styles.moveBtn} onClick={() => { moveTaskUp(index) }}>☝️</button>
                            <button className={styles.moveBtn} onClick={() => { moveTaskDown(index) }}>👇</button></li>
                    )
                })}
            </ol>
        </div>

    )
}

export default ToDoList