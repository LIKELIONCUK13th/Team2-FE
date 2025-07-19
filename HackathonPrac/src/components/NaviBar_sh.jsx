import { useLocation, Link } from "react-router-dom";
import "./NaviBar_sh.css";

export default function NaviBar_sh() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navibar_sh">
      <Link to="/" className={path === "/" ? "active" : ""}>
        홈
      </Link>
      <Link to="/EmoInput" className={path === "/EmoInput" ? "active" : ""}>
        책 추천
      </Link>
      <Link to="/DiagnosisForm" className={path === "/DiagnosisForm" ? "active" : ""}>
        심리 상담
      </Link>
      <Link to="/PromptInput" className={path === "/PromptInput" || path === "/PromptOutput" ? "active" : ""}>
        프롬프트
      </Link>
    </nav>
  );
}