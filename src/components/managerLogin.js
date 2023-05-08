import React, { useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import App from "../App";
import "../App.css";
import AppContext from "./AppContext";
import ManagerHomepage from "./ManagerHomepage";

function Mlogin() {
  const context =useContext(AppContext)
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const[formValue,setFormValue]=useState({
    uname:'',
    pass:''
});
const [records, setRecords] = useState([]);

  
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
//   if(submitted){
//   useEffect(() => {
    
//     getRecords()
//   });
// }
useEffect(()=>{
  async function getRecords() {
    const response = await fetch(`https://employee-management-server.onrender.com/manager`);
      // console.log(response.body)
  
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
  
    const record = await response.json();
    setRecords(record);
     console.log(records)
  }
  getRecords()
},[records.length])

  function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();
    setSubmitted(true);
    //console.log(uname+pass)
    // Find user login info
    // const userData = records.m_username==formValue.uname;
    //  console.log(records)
    const userData = records.find((user) => user.m_username === formValue.uname);
    
    // Compare user info
    console.log(userData)
    if (userData) {
         console.log(userData.m_password)
      if (userData.m_password !== formValue.pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        context.setId(userData.m_id)
        context.setData(userData.m_username)
        navigate("/ManagerHomepage")
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // const rootElement = document.getElementById("root");
  const navigate=useNavigate()
  //  const empLogin = () => {
  //   navigate("/employeeLogin")
  //  }
//    const managerHomepage = () => {
//     ReactDOM.render(<ManagerHomepage />, rootElement);
// }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" onChange={onChange} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" onChange={onChange} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" name="Login"/>
        </div>
        {/* <div className="button-container">
          <input type="button" value="Emp login" onClick={empLogin} />
        </div> */}
      </form>
    </div>
  );

  return (
    <div className="app1">
      <div className="login-form">
        <div className="title1"> Manager Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}
export default Mlogin;