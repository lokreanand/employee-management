import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import './form.css'
 
export default function AddTask() {
 const [form, setForm] = useState({
   task_name: "",
   task_details: ""
 });
 const params = useParams();
 const navigate = useNavigate();
 
//  useEffect(() => {
//    async function fetchData() {
//      const id = params.id.toString();
//      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
//      if (!response.ok) {
//        const message = `An error has occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }
 
//      const record = await response.json();
//      if (!record) {
//        window.alert(`Record with id ${id} not found`);
//        navigate("/ManagerHomepage");
//        return;
//      }
 
//      setForm(record);
//      console.log(record);
//    }
 
//    fetchData();
 
//    return;
//  }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     task_name: form.task_name,
     task_details: form.task_details
   };
 console.log("hello");

 
   // This will send a post request to update the data in the database.
   await fetch(`https://employee-management-server.onrender.com/addtask/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 console.log("hello2");

 
   navigate("/ManagerHomepage");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div className="apps">
     <h3 className="title">Add New task</h3>
     <form onSubmit={onSubmit} className="create">
       <div>
         <label htmlFor="name">Task Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ task_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Task details: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ task_details: e.target.value })}
         />
       </div>
       
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Add task"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}