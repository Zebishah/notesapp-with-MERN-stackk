import { useState } from "react";
import NoteContext from "./NoteContext";
let NoteState=(props)=>{
    let host="http://localhost:5000";
let notes=[];

let [note,setNotes]=useState(notes);
let[s,ss]=useState(null)


let get_Notes=async()=>{
    const response = await fetch(`${host}/api/notes/fetchNote`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
           "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjY0ZWQ5YTdiZGFmNmE1MDQzZDQzN2NhOSJ9LCJpYXQiOjE2OTMzMDU5NjZ9.b2RUJfO_dN1SqYmmAKvXpTMabD6awmr5AT3olooGy3Q"
        },
      
      });
      const data=await response.json(); 
     
      setNotes(data);
}
let add_Note = async (key,title, Description, tags,s) => {
 
 
  const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjY0ZWQ5YTdiZGFmNmE1MDQzZDQzN2NhOSJ9LCJpYXQiOjE2OTMzMDU5NjZ9.b2RUJfO_dN1SqYmmAKvXpTMabD6awmr5AT3olooGy3Q"
      },
      body: JSON.stringify({ title, Description, tags }),
  });
  const data = await response.json();
  setNotes(note.concat(data))
  
 

}
let delete_Note=async(id)=>{

  const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjY0ZWQ5YTdiZGFmNmE1MDQzZDQzN2NhOSJ9LCJpYXQiOjE2OTMzMDU5NjZ9.b2RUJfO_dN1SqYmmAKvXpTMabD6awmr5AT3olooGy3Q"
      },
     
    });
    const data=response.json(); 



let new_Notes=note.filter((note)=>{

return note._id!==id;
})

setNotes(new_Notes);
}
let update_Note=async(id,title,Description,tags)=>{


    
  // Default options are marked with *
  const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
    
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6eyJpZCI6IjY0ZWQ5YTdiZGFmNmE1MDQzZDQzN2NhOSJ9LCJpYXQiOjE2OTMzMDU5NjZ9.b2RUJfO_dN1SqYmmAKvXpTMabD6awmr5AT3olooGy3Q"
    },
    body: JSON.stringify({title,Description,tags}), 
  });
  
  console.log("title"+title)
  const data=await response.json(); 




for (let index = 0; index < note.length; index++) {
const element = note[index];
if(element._id===id)
{
 element.title=title;
 element.Description=Description;
 element.tags=tags;
}
}

}


return(
<NoteContext.Provider value={{note,get_Notes,add_Note,delete_Note,update_Note}}>
{props.children}
</NoteContext.Provider>

)

}
export default NoteState;