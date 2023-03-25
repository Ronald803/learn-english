import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test from './pages/Test';
import Home from './pages/Home'
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import CreateTest from './pages/CreateTest';
import Navbar from './components/Navbar';
import Lateral from './components/Lateral';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <div className='row text-center' style={{"maxWidth":"900px"}}>
        <div className='col-md-3'>
          <Lateral></Lateral>  
        </div>
        <div className='col-md-9'>

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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
