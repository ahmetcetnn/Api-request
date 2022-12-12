import Userlist from "./components/Userlist";
import "./app.css"
import UserDetail from "./UserDetail";
import { useState } from "react";


function App() {
  const[activeUserId,setActiveUserId]=useState()
  return (
    <div className="App">
      
      <div>
      <Userlist setActiveUserId={setActiveUserId} /> 
         </div>
      <div> 
        <UserDetail activeUserId={activeUserId}/>
      </div>
    </div>
  )
}



export default App;
