import React,{useState} from 'react';
import CreateQuestionsForm from '../components/CreateQuestionsForm';
import CreateNewTestForm from '../components/CreateNewTestForm';

const CreateTest = () => {
    const [testCreated, setTestCreated] = useState(false)
    return (
        <div>
            {
                testCreated === true ? 
                <CreateQuestionsForm/>
                :
                <CreateNewTestForm function={setTestCreated}/>
            }
        </div>
    );
}

export default CreateTest;
