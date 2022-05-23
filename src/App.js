import React, { useState } from "react";
import Mlogin from "./components/managerLogin";
import Create from "./components/create";

import {
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import ManagerHomepage from "./components/ManagerHomepage";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import AppContext from "./components/AppContext";
import AddTask from "./components/addTask";

function App() {
    const [data,setData]=useState("")
    const [id,setId]=useState("")

    const username={
        username:data,
        m_id:id,
        setData,
        setId
    }
  return (
      <>  <AppContext.Provider value={username}>
              <Routes>
                  <Route exact path="/" 
                      element={<Mlogin />} />
                  <Route path="/create" 
                      element={<Create />} />
                  <Route path="/managerLogin" 
                      element={<Mlogin />} />
                  <Route path="/ManagerHomepage" 
                      element={<ManagerHomepage />} />
                  <Route path="/recordList" 
                      element={<RecordList />} />
                   <Route path="/edit/:id" 
                      element={<Edit />} />
                    <Route path="/addtask/:id" 
                      element={<AddTask />} /> 
                  {/* <Route path="/employeeLogin" 
                      element={<Login />} />   */}
              </Routes>
              {/* <ManagerHomepage /> */}
              </AppContext.Provider>
      </>
  );
}
export default App;