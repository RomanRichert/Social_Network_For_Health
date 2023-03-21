
import "./style.css";
import { Routes, Route } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import AnswersPage from "./pages/AnswersPage";
import Layout from "./components/Layout";
import HumanBody from "./components/HumanBody";
import FirstPage from "./pages/FirstPage";
import ResultsPage from "./pages/ResultsPage";


function App() {
  return (
    <div className="App">
      {/* <HumanBody /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />
          <Route path=":id" element={<QuestionsPage />} />
          <Route path="answers" element={<AnswersPage />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
