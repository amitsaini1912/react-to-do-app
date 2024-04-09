import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function () {
    let [todos, setTodos] = useState([{ task: "Sample todo", id: uuidv4(), isDone: false }])
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((privTodos) => todos.filter((privTodos) => privTodos.id != id));
    }

    let markAsDoneAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                }
            })
        ));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id){
                    return {
                        ...todo,
                        isDone: true
                    }
                }else{
                    return todo;
                }
                
            })
        ));
    }

    return (
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br /><br />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {} }>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
            &nbsp; &nbsp;
            <button onClick={markAsDoneAll}>Mark As Done All</button>
        </div>
    );
}