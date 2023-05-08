import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./emptable.css"
 
const Record = (props) => (
 <tr>
   <td>{props.record.emp_id}</td>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.department}</td>
   <td>{props.record.level}</td>
   <td>{props.record.tasks.map((data)=>{
     return data.task_name+" , "
   })}</td>

   <td>
   <button
       onClick={() => {
         props.editRecord(props.record._id);
       }}
     >
       Edit
     </button><br/>
     <button
       onClick={() => {
         props.addTask(props.record._id);

       }}
     >
       Add task
     </button><br/>
     <button
       onClick={() => {
        props.deleteRecord(props.record._id);

       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 const navigate=useNavigate()
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://employee-management-server.onrender.com/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
      console.log(records)
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`https://employee-management-server.onrender.com/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }

 async function editRecord(id){
  navigate(`/edit/${id}`)
 }
 async function addTask(id){
  navigate(`/addtask/${id}`)
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         editRecord={()=>editRecord(record._id)}
         addTask={()=>addTask(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <table className="table table-striped" >
       <thead>
         <tr>
         <th>Emp_Id</th>
           <th>Name</th>
           <th>Position</th>
           <th>Department</th>
           <th>Level</th>
           <th>Tasks</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}