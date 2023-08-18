import React from 'react';
import axios from 'axios';
function EditData(){
   const[data,editData] = React.useState({});
   const onChangeEvent =(e) =>{
     editData((data)=>({
        ...data,
        [e.target.name] : e.target.value
     }));
   }
   const onSubmitValue=(event)=>{
    event.preventDefault();
    var formdata = new FormData();
    formdata.append("todo_id",data.id)
    formdata.append("todo_title",data.title)
    axios.post("https://akashsir.in/myapi/crud/todo-edit-api.php",formdata)
    .then(function(response){
        console.log(response);
    })
   }
    return(
        <div>
            <h1>Edit Data</h1>
             <form onSubmit={onSubmitValue}>
                ID: <input type='text' name='id' onChange={onChangeEvent}/><br/>
                Title: <input type='text' name='title' onChange={onChangeEvent}/><br/>
                       <button type='submit'>Change Data</button>
             </form>
        </div>
    )
}
export default EditData;