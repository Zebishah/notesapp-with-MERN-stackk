import React, { useState, useContext, useRef ,useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import UpdateAlert from './UpdateAlert';




const UpdateModal = (props) => {


  let close = useRef(null);
  const notes = useContext(NoteContext);
  let { note,update_Note } = notes;
  let titless=useRef(null);
  let Des_error=useRef(null);
  let tags_error=useRef(null);
  let tit_error=useRef(null);
 let Descriptions=useRef(null);
 let titleError = "Please Enter the title of the note";
 let descriptionError = "Please Enter the Description of the note";
 let tagsError = "Please Enter the tags of the note";
 let [shos,setShos]=useState(false)
 let tagss=useRef(null);
 let count=0;
  let {keys,state,setShow,up_tit,up_des,up_tag}=props
  let [not, set_Note] = useState({id:"", title: "", Description: "", tags: "" })
  const [editedTitle, setEditedTitle] = useState( up_tit);
  const [editedDescription, setEditedDescription] = useState(up_des);
  const [editedTags, setEditedTags] = useState(up_tag);
  let update_Task = (e) => { 
    if (titless.current.value.trim() !== '' || Descriptions.current.value.trim() !== '' || tagss.current.value.trim() !== '') {
      if(titless.current.value.trim()==="")
      {
      tit_error.current.textContent=titleError;
      }
      if(Descriptions.current.value.trim()==="")
      {
      Des_error.current.textContent=descriptionError;
      }
      if(tagss.current.value.trim()==="")
      {
      tags_error.current.textContent=tagsError;
      }

    if(titless.current.value.length<=14 && Descriptions.current.value.length<=66 && tagss.current.value.length<=14)
    {
     
    e.preventDefault()

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
      close_Modal();
      update_Note(keys, editedTitle, editedDescription, editedTags)
    
     }
     else{
      
      tit_error.current.textContent="Same note is already exsisted in your notes";
   }
    }
    else{
      if(titless.current.value.length>14){
        tit_error.current.textContent="You cant enter a title larger than this length";
        return;
      }
      if(Descriptions.current.value.length>66)
      {
        Des_error.current.textContent="You cant enter a Description larger than this length";
        return;
      }
      if(tagss.current.value.length>14)
      {
        tags_error.current.textContent="You cant enter a tag larger than this length";
        return;
      }
    }
    }
 
  }
  let titleChange= (e) => 
  {
    setEditedTitle(e.target.value)
    if(titless.current.value.length<=14 && titless.current.value!=="")
    tit_error.current.textContent=""
  }
  let DesChange= (e) => 
  {
    setEditedDescription(e.target.value)
    if (Descriptions.current.value.length<=66 && Descriptions.current.value!=="") 
    Des_error.current.textContent=""
  }
  let tagChange= (e) => 
  {
    setEditedTags(e.target.value)
    if(tagss.current.value.length<=14 && tagss.current.value!=="")
    tags_error.current.textContent=""
  }
  let close_Modal = () => {
    setShow(false)
if(state===false)
    close.current.style.display="none";
    document.body.classList.remove('overflow-hidden');
  }
  return (
    <>
    <UpdateAlert shos={shos}/>
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
    <div className='modal flex flex-col justify-center items-center bg-black bg-opacity-75 w-[100%] h-[38.7rem] -mt-[9.3rem] z-index: 9999 fixed overflow-hidden 'ref={close} >
    <FontAwesomeIcon icon={faClose} className='text-purple-600 md:text-6xl ml-auto ssm:mr-5 sm:text-3xl sm:-mt-5 ssm:text-2xl ' onClick={() => { close_Modal() }} />
    <div className="container flex flex-col gap-y-4 items-center justify-center bg-white w-[60%] p-10 -mt-6 sm:w-[80%] ssm:w-[80%]">

      <div className="flex flex-row items-center"> 
       <h1 className=' text-purple-600 font-sans items-center p-3 bg-purple-100 rounded-md md:text-2xl ssm:text-lg'>UPDATE YOUR NOTE</h1> 
       

      </div>
    
      <form className='flex flex-col gap-y-3 items-center w-full'>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="title" className='text-purple-600 md:text-xl ssm:text-sm items-start'>New-Title</label>
          <div className="flex flex-col gap-y-1 w-full">
          <input type="text" name="title" value={editedTitle} className="md:p-3 ssm:p-2 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-xl ssm:text-sm" id='title' placeholder='type your title' onChange={titleChange} ref={titless} />
          <p className='text-red-600 text-sm ' ref={tit_error}></p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="Description" className='text-purple-600 md:text-xl ssm:text-sm'>New-Description</label>
          <div className="flex flex-col gap-y-1 w-full">
          <input type="text" name="Description" value={editedDescription}  className="md:p-3 ssm:p-2 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-xl ssm:text-sm" id='Description' placeholder='type your title' onChange={DesChange} ref={Descriptions} />
        
          <p className='text-red-600 text-sm ' ref={Des_error}></p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="tags" className='text-purple-600 md:text-xl ssm:text-sm'>New-Tag</label>
          <div className="flex flex-col gap-y-1 w-full">
          <input type="text" name="tags" value={editedTags} className="md:p-3 ssm:p-2 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-xl ssm:text-sm" id='tags' placeholder='type your title' onChange={tagChange} ref={tagss}/>
        
          <p className='text-red-600 text-sm ' ref={tags_error}></p>
          </div>
        </div>
        <input type="button" value="Update" className='p-3 mt-[20px] cursor-pointer rounded-md shadow-sm shadow-black bg-purple-600 text-white w-[10rem]' onClick={update_Task} />


      </form>
    </div>
    </div>
    </>
  )
}

export default UpdateModal