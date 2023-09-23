import React, { useState, useRef, useContext, useEffect } from 'react'
import UpdateAlert from './UpdateAlert';
import Navbar from './Navbar';
import LogContext from '../context/notes/LogContext';

const SignUp = (props) => {
  useEffect(() => {
   fetchLogs();
  }, [])
  
  let [logs,setLogs]=useState(null);
  const Logs= useContext(LogContext);
  let { sign_up,fetchLogs,Users } = Logs;

  let username = useRef(null);
  let email_error = useRef(null);
  let pass_error = useRef(null);
  let user_error = useRef(null);
  let password = useRef(null);
  let userError = "Please Enter the title of the note";
  let emailError = "Please Enter the Description of the note";
  let passError = "Please Enter the password of the note";
  let [shos, setShos] = useState(false)
  let Email = useRef(null);
  let count = 0;
  let { keys, state, setShow } = props
  let [not, set_Note] = useState({ id: "", userName: "", email: "", Password: "" })

  let SignUp = async(e) => {
    console.log("clicked")
    


  
    if (username.current.value.trim() !== '' || Email.current.value.trim() !== '' || password.current.value.trim() !== '') {
      if (username.current.value.trim() === "") {
        user_error.current.textContent = userError;
      }
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = emailError;
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = passError;
      }

      if (username.current.value.length <= 14 && Email.current.value.length <= 66 && password.current.value.length <= 14) {

        e.preventDefault()

        for (let index = 0; index < Users.length; index++) {
          const element = Users[index];

          if (element.name.trim() === username.current.value && element.Email.trim() === Email.current.value && element.Password.trim() === username.password.value ) {
            console.log("yes")
            count = 0;
          }
          else {
            console.log("no")
            count++;

          }

        }
        if (count === Users.length) {
          setShos(true);
          username.current.value = ""
          Email.current.value = ""
          password.current.value = ""
          sign_up(username.current.value,Email.current.value,password.current.value)
        }
        else {

          user_error.current.textContent = "Same note is already exsisted in your notes";
        }
      }
      else {
        if (username.current.value.length > 14) {
          user_error.current.textContent = "You cant enter a title larger than this length";
          return;
        }
        if (password.current.value.length > 66) {
          email_error.current.textContent = "You cant enter a Description larger than this length";
          return;
        }
        if (password.current.value.length > 14) {
          pass_error.current.textContent = "You cant enter a tag larger than this length";
          return;
        }
      }
    }
    else{
      if (username.current.value.trim() === "") {
        user_error.current.textContent = userError;
      }
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = emailError;
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = passError;
      }
    }

  }
  let fetching_Values = (e) => {

    setLogs({ ...logs, [e.target.name]: e.target.value });
    if (username.current.value.length <= 14 && username.current.value !== "")
      user_error.current.textContent = ""
    if (Email.current.value.length <= 66 && Email.current.value !== "")
      email_error.current.textContent = ""
    if (password.current.value.length <= 14 && password.current.value !== "")
      pass_error.current.textContent = ""
   };

  return (
    <div className='overflow-hidden flex flex-col '>
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

      <div className=" flex flex-col m-auto items-center justify-center md:p-6 ssm:p-2 bg-white shadow-sm shadow-black w-[40%] h-[28rem] relative bottom-[20.6rem] md:w-[30rem] sm:w-[60%] ssm:w-[70%]">

        <div className="container flex flex-col gap-y-4 h-full items-center justify-center bg-white p-10  ">

          <div className="flex flex-row items-center">
            <h1 className=' text-purple-600 font-sans items-center p-2 bg-purple-100 rounded-md md:text-2xl ssm:text-lg'>Sign-Up</h1>


          </div>

          <form className='flex flex-col gap-y-1 items-center w-full'>
            <div className="flex flex-col gap-y-2 w-full">
              <label htmlFor="UserName" className='text-purple-600 md:text-sm ssm:text-sm items-start'>UserName</label>
              <div className="flex flex-col gap-y-1 w-full">
                <input type="text" name="UserName" className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm" id='UserName' placeholder='type your UserName' ref={username} onChange={fetching_Values}  />
                <p className='text-red-600 text-xs ' ref={user_error}></p>
              </div>
            </div>
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
            <input type="button" value="Register" className='p-2 mt-[5px] cursor-pointer rounded-md shadow-sm shadow-black bg-purple-600 text-white w-[10rem]' onClick={SignUp} />


          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp