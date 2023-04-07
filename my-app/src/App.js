import "./style.css";
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import SubmitPage from "./pages/SubmitPage";
import Layout from "./components/Layout";
import FirstPage from "./pages/FirstPage";
import ResultsPage from "./pages/ResultsPage";
import StartPage from "./pages/StartPage";


function App() {



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="human" element={<FirstPage />} />
          <Route path=":id" element={<QuestionsPage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
