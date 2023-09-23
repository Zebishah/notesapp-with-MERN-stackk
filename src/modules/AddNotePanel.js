import React, { useRef, useState,useEffect } from "react";
import Alert from "./Alert";
import AllNotes from "./ShowingAllNotes";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import UpdateModal from "./UpdateModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import VNavbar from "./VNavbar";

const AddNote = (props) => {
  //Adding new note in database as well as in screen
  const notes = useContext(NoteContext);
 
let [s,sss]=useState(false)
let [shos,setShos]=useState(false)
  let { note ,add_Note } = notes;
let count=0;
  let [not, set_Note] = useState({ id:"" ,title: "", Description: "", tags: "" });
  
  const [key, setKey] = useState(null);
 
  let [state, ss] = useState(false);

let [noteValue,setNotValue]=useState({id:"", title: "", Description: "", tags: "" })
let titless=useRef(null);
let Des_error=useRef(null);
let tags_error=useRef(null);
let tit_error=useRef(null);
let Descriptions=useRef(null);
let tagss=useRef(null);
const [showAlert, setShowAlert] = useState(false);

const showAlertForDuration = () => {
  setShowAlert(true);

  // Hide the alert after 3 seconds
  setTimeout(() => {
    setShowAlert(false);
  }, 3000); // 3000 milliseconds (3 seconds)
};
let update_Note = (card) => {
 
  ss(true);
  setKey(card.keys);
  
  setNotValue({
    id:card.keys,
    title:card.titles,
    Description:card.Description,
    tags:card.tags

})


document.body.classList.add('overflow-hidden');

};



  let submit_Task = (e) => {
    if (titless.current.value.trim() !== '' || Descriptions.current.value.trim() !== '' || tagss.current.value.trim() !== '') {
    
      if(titless.current.value.trim()==="")
      {
      tit_error.current.textContent="Please Enter the title of note";
      }
      if(Descriptions.current.value.trim()==="")
      {
      Des_error.current.textContent="Please Enter the Description of note";
      }
      if(tagss.current.value.trim()==="")
      {
      tags_error.current.textContent="Please Enter the tags of note";
      }
    
    if(titless.current.value.length<=14 &&Descriptions.current.value.length<=66  &&tagss.current.value.length<=14)
    {
     
    e.preventDefault();
    for (let index = 0; index < note.length; index++) {
      const element = note[index];
    
    if(element.title.trim()===titless.current.value )
      {
        console.log("yes")
        count=0;
       
       
      }
      else{
        console.log("no")
        count++;
       
      }
   
    
    }
    if(count===note.length)
    {
     setShos(true);
       titless.current.value=""
       Descriptions.current.value=""
       tagss.current.value=""
   
    showAlertForDuration();
      add_Note(key,not.title, not.Description, not.tags,s);
    }
    else{
      
       tit_error.current.textContent="Same note is already exsisted in your notes";
    }
  }
  else{
    if(titless.current.value.length>14){
      tit_error.current.textContent="You cant enter a title larger than this length";
    }
    if(Descriptions.current.value.length>66)
    {
      Des_error.current.textContent="You cant enter a Description larger than this length";
    }
    if(tagss.current.value.length>14)
    {
      tags_error.current.textContent="You cant enter a tag larger than this length";
    }
  }
  }

  else{

    if(titless.current.value.trim()==="")
    {
    tit_error.current.textContent="Please Enter the title of note";
    }
    if(Descriptions.current.value.trim()==="")
    {
    Des_error.current.textContent="Please Enter the Description of note";
    }
    if(tagss.current.value.trim()==="")
    {
    tags_error.current.textContent="Please Enter the tags of note";
    }
  }
  };
  let fetching_Values = (e) => {
    
    set_Note({ ...not, [e.target.name]: e.target.value });
    if(titless.current.value.length<=14 && titless.current.value!=="")
tit_error.current.textContent=""
if (Descriptions.current.value.length<=66 && Descriptions.current.value!=="") 
  Des_error.current.textContent=""
if(tagss.current.value.length<=14 && tagss.current.value!=="")
tags_error.current.textContent=""
  };
  

   
  //add note interface
  return (
    <>
 

     <Alert shos={shos}/>
     {
      useEffect(() => {
   if(shos)
   { const timerId = setTimeout(() => {
    setShos(false);
  }, 3000);

     return () => clearTimeout(timerId);
    }
  
  }, [shos])
}

      <div className="container flex flex-col smd:gap-y-7 items-center -mt-[19rem] ssm:gap-y-5">
        <h1 className=" smd:text-3xl text-purple-600 font-sans items-center p-4 bg-purple-100 rounded-md ">
          ADD YOUR NOTES
        </h1>
        <form className="flex flex-col gap-y-3 items-center">
          <div className="flex flex-col smd:gap-y-3 ssm:gap-y-2">
            <label
              htmlFor="title"
              className="smd:text-xl text-purple-600 items-start md:"
            >
              Title
            </label>
            <div className="flex flex-col gap-y-1">
            <input
              type="text"
              name="title"
              ref={titless}
              className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem] "
              id="title"
              placeholder="type your title"
              onChange={fetching_Values}
            />
               <p className='text-red-600 text-sm ' ref={tit_error}></p>
          </div>
          </div>
          <div className="flex flex-col gap-y-3 ssm:gap-y-2">
            <label htmlFor="Description" className="smd:text-xl text-purple-600 ">
              Description
            </label>
            <div className="flex flex-col gap-y-1">
            <input
              type="text"
              name="Description"
              ref={Descriptions}
              className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem]  "
              id="Description"
              placeholder="type your title"
              onChange={fetching_Values}
            />
               <p className='text-red-600 text-sm ' ref={Des_error}></p>
          </div>
          </div>
          <div className="flex flex-col gap-y-3 ssm:gap-y-2">
            <label htmlFor="tags" className="smd:text-xl text-purple-600">
              Tags
            </label>
            <div className="flex flex-col gap-y-1">
            <input
              type="text"
              name="tags"
              ref={tagss}
              className="smd:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black smd:w-[40rem] ssm:p-2 ssm:placeholder:text-xs md:w-[30rem] sm:w-[23rem] ssm:w-[18rem]  "
              id="tags"
              placeholder="type your title"
              onChange={fetching_Values}
            />
               <p className='text-red-600 text-sm ' ref={tags_error}></p>
          </div>
          </div>
          <input
            type="button"
            value="Submit"
  
            className="p-3 smd:mt-[20px] cursor-pointer rounded-md shadow-sm shadow-black bg-purple-600 text-white w-[10rem] ssm:p-2 ssm:w-[8rem] md:mt-[16px] ssm:mt-[14px] "
            onClick={submit_Task}
          />
        </form>
        {state && <UpdateModal keys={key} state={state} setShow={ss}  up_tit={noteValue.title} up_des={noteValue.Description} up_tag={noteValue.tags}/>}
        <AllNotes update_Note={update_Note}/> 
      </div>
    </>
  ); 
};

export default AddNote;
