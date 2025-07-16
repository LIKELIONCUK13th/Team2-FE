import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="box-container">
        <Link to="/EmoInput" className="box">책 추천</Link>
        <Link to="/DiagnosisForm" className="box">심리 상담</Link>
        <Link to="/PromptInput" className="box">프롬프트</Link>
      </div>
    </div>
  );
}

export default App;
