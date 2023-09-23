import './App.css';
import NoteState from './context/notes/NoteState';
import  About  from './modules/About';
import Home from './modules/Home(MainPage)';
import Navbar from './modules/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './modules/signIn';
import SignUp from './modules/signUp';
import LogState from './context/notes/LogState'
function App() {
  return (
    <div className="App">
     
   <LogState>
        <NoteState>
          
      <Router>
      
        
        <Routes>
      
        <Route exact path="/" element={<Home key="Home" />} />
        <Route exact path="/about" element={<About key=" About" />} />
        <Route exact path="/SignIn" element={<SignIn key="signIn"/>} />
        <Route exact path="/SignUp" element={<SignUp key=" signUp" />} />
        
        </Routes>
       
      </Router>
     
      </NoteState>
      </LogState>
   
      </div>

  );
}

export default App;
