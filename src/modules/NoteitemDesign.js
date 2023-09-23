import React, { useContext,useRef,useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import religionImage from '../images/Itachi.jpg';
import hinduismImage from '../images/wallpaperflare.com_wallpaper (2).jpg';
import businessImage from '../images/wallpaperflare.com_wallpaper (3).jpg';
import NoteContext from '../context/notes/NoteContext';




const Noteitem = (props) => {
    const {keys, titles, Description, tags,update_Note} = props;
    const notes=useContext(NoteContext);
    let {delete_Note}=notes;
    let imageSrc;

    if (tags === "Religion") {  
        imageSrc = religionImage;
    } else if (tags === "hinduis") {
        imageSrc = hinduismImage;
    } else {
        imageSrc = businessImage;
    }

  
    return (
        <>
   
        <div className='flex flex-col w-[17rem] lg:w-[17rem] rounded-md border-purple-500 border-2 shadow-sm shadow-purple-900 smd:w-[15.5rem] md:w-[13.8rem] sm:w-[12rem] ssm:w-[11rem]'  key={keys}>
            <div className="image">
                <img src={imageSrc} alt={tags} className='w-full rounded-t-sm' />
            </div>
            <div className="content flex flex-col space-y-2 md:p-4 sm:p-2 ssm:p-2 bg-white rounded-b-md">
                <div className="flex flex-row md:gap-x-4 sm:gap-x-3 justify-between">
                    <h2 className="font-sans text-purple-800 smd:text-xl sm:text-[17px] ssm:text-[15px] font-bold sm:w-[8rem] truncate hover:text-clip" >
                        {titles}
                    </h2>
                    <div className="flex flex-row gap-x-4 smd:mt-[0.3rem] sm:mt-[0.2rem]" >
                        <FontAwesomeIcon icon={faTrash} className='text-purple-600 ' onClick={()=>{delete_Note(keys)}} />
                        <FontAwesomeIcon icon={faPenToSquare}  className='text-purple-600' onClick={()=>{update_Note({keys,titles,Description,tags})}} />
                    </div>
                </div>

                <p className="font-sans text-purple-800 smd:h-[10rem] overflow-hidden sm:h-[7rem] ssm:h-[5rem] smd:text-lg sm:text-[14px] ssm:text-[11px]">
                    {Description}
                </p>
                <h3 className="font-sans text-purple-800 smd:text-md ssm:text-sm" >
                    Tag: {tags}
                </h3>
            </div>
            
        </div>
        </>
    );
};

export default Noteitem;

