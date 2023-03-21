import './styles.css';
import { Routes, Route } from 'react-router-dom' 
import QuestionsPage from './pages/QuestionsPage';
import AnswersPage from './pages/AnswersPage';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Layout />}>
            <Route path=':id' element={<QuestionsPage/>}/>
            <Route path='answers' element={<AnswersPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
