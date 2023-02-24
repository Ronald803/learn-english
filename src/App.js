import './App.css';
import QuestionsList from './components/QuestionsList';
import QuestionsPanel from './components/QuestionsPanel';

function App() {
  return (
    <div className="App">
      <h1>Learn English</h1>
      <QuestionsPanel></QuestionsPanel>
      <QuestionsList></QuestionsList>
    </div>
  );
}

export default App;
