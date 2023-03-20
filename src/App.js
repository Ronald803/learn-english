import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test from './pages/Test';
import Home from './pages/Home'
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import CreateTest from './pages/CreateTest';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/tests' element={<Test></Test>}/>      
          <Route path='/login' element={<Login></Login>}/>    
          <Route path='/create-user' element={<CreateUser></CreateUser>}/>
          <Route path='/create-test' element={<CreateTest></CreateTest>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
