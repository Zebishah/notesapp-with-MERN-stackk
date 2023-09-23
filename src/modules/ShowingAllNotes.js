import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './NoteitemDesign';
const AllNotes = (props) => {

const notes=useContext(NoteContext);

let {note,get_Notes}=notes;
let {update_Note}=props

useEffect(() => {
  get_Notes();
},[])


    return (
      <div className="flex flex-col gap-y-14 mt-10 items-center justify-center">
    
        <h1 className=' text-purple-600 text-3xl font-sans text-center items-center p-4 bg-purple-100 rounded-md w-full '>YOUR NOTES</h1>
           <div className='flex flex-wrap items-center sm:justify-start smd:ml-8 xl:gap-x-[1.7rem] gap-y-8 lg:gap-x-[4.2rem] smd:gap-x-[2.6rem] ssm:gap-x-[1rem] md:ml-8 sm:ml-2 ssm:justify-center  '>
           
              {note.map((notes)=> {
                       
              return <Noteitem keys={notes._id} titles={notes.title} Description={notes.Description} tags={notes.tags} update_Note={update_Note} />
        
             })} 


</div>
        </div>
    )
}

export default AllNotes