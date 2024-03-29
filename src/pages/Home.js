import React,{useState,useEffect} from 'react';
import Carousel from '../components/Carousel';
import LoginForm from '../components/LoginForm';
import CreateUserForm from '../components/CreateUserForm';
import Test from './Test';

const Home = () => {
    const [createUser, setCreateUser] = useState(false)
    const [logged, setLogged] = useState(false)
    const sessionStor = sessionStorage.getItem('n')
    console.log({sessionStor});
    useEffect(()=>{
        if(sessionStor==null || sessionStor===""){setLogged(false)}else{setLogged(true)}
    },[])
    function create (arg){setCreateUser(arg)}
    return (
        <div className='text-center'>
            {
                logged
                ?
                <div><Test/></div>
                :
                <div>
                    <div>
                        <div className='card mx-auto border border-black' style={{"maxWidth":"500px"}}>
                            <Carousel/>
                        </div>
                    </div>
                    {
                        createUser
                        ?
                        <div className='my-2 px-2 mx-auto' style={{"maxWidth":"400px"}}>
                            <CreateUserForm/>
                            <p className='text-white'>Ya tienes una cuenta? <a className='text-white btn cursor-pointer' onClick={()=>create(false)}>Inicia sesión</a></p>
                        </div>
                        :
                        <div className='my-2 px-2 mx-auto' style={{"maxWidth":"400px"}}>
                            <LoginForm/>
                            <p className='text-white'>No tienes una cuenta? <a className='text-white btn cursor-pointer' onClick={()=>create(true)}>Registrate</a></p>
                        </div>
                    }
                </div>                
            }
        </div>
    );
}

export default Home;
