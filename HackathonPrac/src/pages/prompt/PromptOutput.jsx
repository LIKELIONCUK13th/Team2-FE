import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../../styles/prompt/PromptOutput.css";
import NaviBar_sh from "../../components/NaviBar_sh";

export default function PromptOutput() {
  const location = useLocation();
  const result = location.state?.prompt || ""; // 백엔드에서 받은 프롬프트 텍스트

  console.log(`[디버깅] API가 생성한 raw 프롬프트: ${result}`);
  
  // result 문장 정리(전처리)
  const systemMatch = result.match(/\[System\]([\s\S]*?)(?=\[User\]|\[System\]|$)/);
  const userMatch = result.match(/\[User\]([\s\S]*?)(?=\[System\]|\[User\]|$)/);

  const systemContent = systemMatch?.[1]?.trim() || "";
  const userContent = userMatch?.[1]?.trim() || "";

  let finalResult = "";

  if (systemContent && userContent) {
    finalResult = `${systemContent}\n\n${userContent}`;
  } else if (systemContent) {
    finalResult = systemContent;
  } else if (userContent) {
    finalResult = userContent;
  } else {
    finalResult = result;
  }

  console.log(`[디버깅] 전처리한 프롬프트: ${finalResult}`);

  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  // 페이지 로드 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="output-container">
      <NaviBar_sh />

      <h1 className="output-title">생성된 프롬프트</h1>

      <div className="monitor-container-output">
        <textarea
          className="monitor-screen-output"
          readOnly
          ref={textareaRef}
          value={finalResult}
        />
        <div className="monitor-neck"></div>
        <div className="monitor-stand"></div>
      </div>

      <div className="btn-wrapper">
        <button className="prompt-btn" onClick={handleCopy}>
          {copied ? "복사 완료" : "프롬프트 복사"}
        </button>
      </div>
    </div>
  );
}