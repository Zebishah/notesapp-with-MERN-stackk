import React, { useState } from 'react'

const VNavbar = (props) => {
let{show}=props;
  return (
    <div className={`nav-items flex w-40 shadow-sm shadow-black ml-auto mr-4 transition-all duration-500 ease-in-out bg-purple-600 ${show?'-translate-x-0':'ssm:translate-x-48'}`}>
    <ul className="flex flex-col p-4 gap-y-5 items-center justify-center w-full">

      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        Home
      </li>
      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        About
      </li>
      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        Contacts
      </li>
      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        Notes
      </li>
      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        Help
      </li>
      <li className=" text-white cursor-pointer text-[16px] border-b-2 border-purple-500 w-full p-1 text-center">
        Links
      </li>
    </ul>
  </div>
  )
}

export default VNavbar
