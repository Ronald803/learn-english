import './App.css';
import {useSelector} from 'react-redux'
import QuestionsList from './components/QuestionsList';
import QuestionsPanel from './components/QuestionsPanel';

function App() {
  const questionsState = useSelector(state => state.questions)
  console.log({questionsState});
  return (
    <div className="App">
      <h1>Learn English</h1>
      <QuestionsList></QuestionsList>
      <QuestionsPanel></QuestionsPanel>
    </div>
  );
}

export default App;
