import React, { useState } from "react";
import { useNavigate } from "react-router";
import './form.css'

 
export default function Create() {
 const [form, setForm] = useState({
   emp_id:"",
   name: "",
   position: "",
   department:"",
   level: "",
   tasks:[{
    "task_id":"t02"
   }]
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
    // console.log(form.emp_id);
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
    // console.log(newPerson)
   await fetch("https://employee-management-server.onrender.com/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   
   setForm({ emp_id:"", name: "", position: "", department:"", level: "" });
   navigate("/ManagerHomepage");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="apps">
     <h3 className="title">Add new Employee</h3>
     <form onSubmit={onSubmit} className="create">
     <div className="form-group">
         <label htmlFor="emp_id">Emp_ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
         <input
           type="text"
           className="form-control"
           id="emp_id"
           value={form.emp_id}
           onChange={(e) => updateForm({ emp_id: e.target.value })}
         />
         </div>
       <div className="form-group">
         <label htmlFor="name">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <br/>
       <div className="form-group">
         <label htmlFor="position">Position &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="department">Department</label>
         <input
           type="text"
           className="form-control"
           id="department"
           value={form.department}
           onChange={(e) => updateForm({ department: e.target.value })}
         />
       </div>
       <br/>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div>
       <br/>
       <div className="form-group">
         <input
           type="submit"
           value="Add Employee"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}