import {useState,useEffect } from "react";
import LogContext from "./LogContext";
 
    const LogContexts = (props) => {
        let logs=["asad"];
    let [Users,setUsers]=useState(null);
    let host="http://localhost:5000";

    
                    let fetchLogs=async()=>{
    const response = await fetch(`${host}/api/auth/fetchUser`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },

    });
    const data = await response.json();
    setUsers(data)

    
}

    let sign_up=async(name,Email,Password)=>{
        const response = await fetch(`${host}/api/auth/signUp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,Email,Password}),
        });
        const data = await response.json();
        console.log(data);
        
       
    }
    let sign_in=async(Email,Password)=>{
        const response = await fetch(`${host}/api/auth/signIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Email,Password}),
        });
        const data = await response.json();
        console.log(data);
        
       
    }
    
    return (
        <LogContext.Provider value={{sign_up,sign_in,fetchLogs,Users}}>
        {props.children}
        </LogContext.Provider>
    )
  }
  
  export default LogContexts