import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function List() {
    const [list, setList] = useState([]);
    const onChangeEvent = (e) => {
        setList((list) => ({
            ...list,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(response => {
                console.log(response.data.todo_list);
                setList(response.data.todo_list);
            })
    }, []);
  const deleteTodo = ()=>{
    
  }
    return (
        <div>
            <h2>User Details</h2>
            <table border={1} >
            <thead>
            <tr>
                <th>Title</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {list.map((values,i) => (
               <tr key={i}>
               <td key={values.todo_title}>{values.todo_title}</td>
               <td ><button onClick={deleteTodo}>delete</button></td>
               <td ><Link to="EditData"> Edit data </Link></td>
               </tr>
            ))}
            </tbody>
            </table>
        </div>
    )
}
export default List;