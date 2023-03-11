import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Test from './pages/Test';
import Home from './pages/Home'
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/tests' element={<Test></Test>}/>      
          <Route path='/login' element={<Login></Login>}/>    
          <Route path='/create-user' element={<CreateUser></CreateUser>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
