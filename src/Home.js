import Axios from "axios";
import React, { useEffect, useState } from "react";
function Home() {

    const [data,setData] = useState([]);
    useEffect(() => {
         Axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
         .then(function(response){
         
         });
    })
    
    return (
        <div>
            <h1>Home</h1>
            <ul>    
            </ul>
            
         </div>
    );
}
export default Home;