import './App.css';
import ExamRequest from './components/ExamRequest';
import QuestionsList from './components/QuestionsList';
import QuestionsPanel from './components/QuestionsPanel';

function App() {
  return (
    <div className="App">
      <h1>Learn English</h1>
      <ExamRequest></ExamRequest>
      <QuestionsPanel></QuestionsPanel>
      <QuestionsList></QuestionsList>
    </div>
  );
}

export default App;
