import React from 'react'

const UpdateAlert = (props) => {
  let {shos}=props
  return (
    <>
    
    <div className={`flex justify-center items-center w-[100%] h-12  bg-green-400 text-green-950 -translate-y-12 -translate-x-full ${shos&&"translate-x-0"} transition-all duration-500 delay-200 ease-in-out`}> 
             <h3>Operation is Successfully completed! Note is now Updated in Your All Notes</h3>
             </div>
             {
    
      }
        </>
  )
}

export default UpdateAlert