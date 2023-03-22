
import "./style.css";
import { Routes, Route } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import SubmitPage from "./pages/SubmitPage";
import Layout from "./components/Layout";
import HumanBody from "./components/HumanBody";
import FirstPage from "./pages/FirstPage";
import ResultsPage from "./pages/ResultsPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />
          <Route path=":id" element={<QuestionsPage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
