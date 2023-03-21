import './styles.css';
import { Routes, Route } from 'react-router-dom' 
import QuestionPage from './pages/QuestionsPage';
import AnswersPage from './pages/AnswersPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
            <Route path='questions' element={<QuestionPage/>}/>
            <Route path='answers' element={<AnswersPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
