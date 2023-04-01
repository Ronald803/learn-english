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
      <div 
        className='d-flex justify-content-center align-items-center' 
        style={{"marginLeft":"auto","marginRight":"auto","maxWidth":"1200px"}}  
      >
        {/* <div className='col-md-3'>
          <Lateral></Lateral>  
        </div> */}
        <div >

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
