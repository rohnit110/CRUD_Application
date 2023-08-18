import React from 'react';
import Axios from 'axios';
import { useEffect,useState} from 'react';
function AddData(){
    const[data,addData]= React.useState("")
     const onChangeEvent = (e)=>{
       addData((data) =>({
            ...data,
            [e.target.name] :e.target.value
       })
       );}
    const onSubmitValue=(event)=>{
        event.preventDefault();
        var formdata = new FormData();
        formdata.append("todo_title",data.add)
        Axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",formdata)
        .then(function(response){
            console.log(response)
        })
    }

    return(
        <div>
            <h1>Add Data</h1><br/>
            <form onSubmit={onSubmitValue}>
               Title:  <input type='text' name='add' onChange={onChangeEvent}></input><br/>
                <button type='submit'>Add</button>
                
                
            </form>
        </div>
    )

}
export default AddData;