import {React,useState,useRef} from 'react'
import AddNote from './AddNotePanel'
import AllNotes from './ShowingAllNotes'
import Navbar from './Navbar'

const Home = (props) => {
  let {update_Note}=props
  
  return (
    <div className='flex-col xl:overflow-x-hidden'>
       <Navbar />
        <AddNote  update_Note={update_Note} />

        </div>
  )
}
export default Home
