import React,{useState} from 'react';
import { getTestsBackend } from '../axiosRequests/Tests/axiosService';

const TestsTable = () => {

    const [tests, setTests] = useState([]);

    getTestsBackend()
        .then( a => {
            console.log({a});
            setTests(a.data.body)
        })
        .catch( e=>{
            console.log({e});
        })
    //console.log(tests);
    return (
        <div>
            <p>Esta es la tabla de tests disponibles</p>
        </div>
    );
}

export default TestsTable;
