import React, { useState, useRef, useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import UpdateAlert from './UpdateAlert';
import Navbar from './Navbar';
import LogContext from '../context/notes/LogContext';
const SignIn = (props) => {
  
    useEffect(() => {
     fetchLogs();
    }, [])
    
    let [logs,setLogs]=useState(null);
    const Logs= useContext(LogContext);
    let { sign_in,fetchLogs,Users } = Logs;
    let username = useRef(null);
    let email_error = useRef(null);
    let pass_error = useRef(null);
    let user_error = useRef(null);
    let password = useRef(null);
    let emailError = "Please Enter the E-mail of the note";
    let passError = "Please Enter the password of the note";
    let [shos, setShos] = useState(false)
    let Email = useRef(null);
    let count = 0;
    let { keys, state, setShow } = props
    let [not, set_Note] = useState({ id: "", userName: "", email: "", Password: "" })
  
    let Signin= (e) => {
      console.log("clicked")
     
      if (Email.current.value.trim() !== '' || password.current.value.trim() !== '') {
       
        if (Email.current.value.trim() === "") {
          email_error.current.textContent = emailError;
        }
        if (password.current.value.trim() === "") {
          pass_error.current.textContent = passError;
        }
  
        if ( Email.current.value.length <= 66 && password.current.value.length <= 14) {
  
          e.preventDefault()
  
          for (let index = 0; index < Users.length; index++) {
            const element = Users[index];
        
            if (element.Email.trim() === Email.current.value && element.Password.trim() === password.current.value ) {
              console.log("yes")
              count = 0;
            }
           
  
          }
          if (count===0) {
            setShos(true);

            Email.current.value = ""
            password.current.value = ""
            console.log("login")
            console.log(Email.current.value)
            sign_in(Email.current.value,password.current.value)
          }
          else {
  
            Email.current.textContent = "Same note is already exsisted in your notes";
          }
        }
        else {
          
          if (Email.current.value.length > 25) {
            email_error.current.textContent = "You cant enter a Email larger than this length";
            return;
          }
          if (password.current.value.length > 14) {
            pass_error.current.textContent = "You cant enter a tag larger than this length";
            return;
          }
        }
      }
      
  
    }
    let fetching_Values = (e) => {
    
        setLogs({ ...logs, [e.target.name]: e.target.value });
        if (Email.current.value.length <= 66 && Email.current.value !== "")
          email_error.current.textContent = ""
        if (password.current.value.length <= 14 && password.current.value !== "")
          pass_error.current.textContent = ""
       
    };
  
    return (
      <div className='overflow-hidden flex flex-col'>
        <Navbar />
        <UpdateAlert shos={shos} />
        {
          useEffect(() => {
            if (shos) {
              const timerId = setTimeout(() => {
                setShos(false);
              }, 3000);
  
              return () => clearTimeout(timerId);
            }
  
          }, [shos])
        }
  
        <div className=" flex flex-col m-auto items-center justify-center md:p-6 ssm:p-2 bg-white shadow-sm shadow-black w-[40%] h-[25rem] relative bottom-[18.6rem] md:w-[30rem] sm:w-[60%] ssm:w-[70%]">
  
          <div className="container flex flex-col gap-y-6 h-full items-center justify-center bg-white p-10  ">
  
            <div className="flex flex-row items-center">
              <h1 className=' text-purple-600 font-sans items-center p-2 bg-purple-100 rounded-md md:text-2xl ssm:text-lg'>Sign-In</h1>
  
  
            </div>
  
            <form className='flex flex-col gap-y-2 items-center w-full'>
           
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="E-mail" className='text-purple-600 md:text-sm ssm:text-sm'>E-mail</label>
                <div className="flex flex-col gap-y-1 w-full">
                  <input type="email" name="E-mail" className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm" id='E-mail' placeholder='type your Email' ref={Email} onChange={fetching_Values} />
  
                  <p className='text-red-600 text-xs ' ref={email_error}></p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <label htmlFor="Password" className='text-purple-600 md:text-sm ssm:text-sm'>Password</label>
                <div className="flex flex-col gap-y-1 w-full">
                  <input type="password" name="Password" className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm" id='Password' placeholder='type your Password' ref={password} onChange={fetching_Values} />
  
                  <p className='text-red-600 text-xs ' ref={pass_error}></p>
                </div>
              </div>
              <div className="flex gap-x-1 w-full mt-2">
                <input type="checkbox" className='md:p-1' />
                <p className='md:text-sm text-purple-500 ssm:text-[10px]'>Agree to the liscence terms and the Agreements </p>
              </div>
              <input type="button" value="Login" className='p-2 mt-[5px] cursor-pointer rounded-md shadow-sm shadow-black bg-purple-600 text-white w-[10rem]' onClick={Signin} />
  
  
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignIn