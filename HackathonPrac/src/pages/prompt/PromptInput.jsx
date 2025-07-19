import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/prompt/PromptInput.css";
import NaviBar_sh from "../../components/NaviBar_sh";

export default function PromptInput() {
  const [usage, setUsage] = useState("");
  const [customUsage, setCustomUsage] = useState("");
  const [answerStyle, setAnswerStyle] = useState([]);
  const [customStyle, setCustomStyle] = useState("");
  const [question, setQuestion] = useState("");

  const [showUsageHelp, setShowUsageHelp] = useState(false);
  const [showStyleHelp, setShowStyleHelp] = useState(false);
  const [showQuestionHelp, setShowQuestionHelp] = useState(false);

  const navigate = useNavigate();

  const toggleAnswerStyle = (value) => {
    if (answerStyle.includes(value)) {
      setAnswerStyle(answerStyle.filter((item) => item !== value));
    } else {
      setAnswerStyle([...answerStyle, value]);
    }
  };

  const handleSubmit = async () => {
    const finalUsage = usage === "기타" ? customUsage : usage;
    const finalStyle = answerStyle.includes("기타")
      ? [...answerStyle.filter(s => s !== "기타"), customStyle]
      : answerStyle;

    const requestBody = {
      purpose: finalUsage,
      style: finalStyle,
      question: question,
    };

    // 백엔드 요청 없이 예시 데이터 사용
    const generatedPrompt = "예시 답변입니다.";
    navigate("/PromptOutput", { state: { prompt: generatedPrompt } });


    // ******** 백엔드 통신시 사용할 코드! 절대 삭제 X ********
    // try {
    //   const response = await fetch("/api/prompt/posts", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(requestBody),
    //   });

    //   const data = await response.json();
    //   const generatedPrompt = data.answer; // 백엔드에서 { answer: "..." } 형태로 반환된다고 가정

    //   navigate("/PromptOutput", { state: { prompt: generatedPrompt } });
    // } catch (error) {
    //   alert("프롬프트 생성 중 오류가 발생했습니다.");
    //   console.error(error);
    // }
  };

  return (
    <div className="prompt-container">
      <NaviBar_sh />

      <h1 className="prompt-title">프롬프트 생성</h1>

      {/* 사용 용도 */}
      <section className="prompt-section">
        <label className="prompt-label">
          사용 용도
          <span onClick={() => setShowUsageHelp(!showUsageHelp)} className="prompt-help">?</span>
        </label>
        {showUsageHelp && (
          <p className="prompt-help-text">LLM을 활용할 작업을 선택해주세요.</p>
        )}
        <div className="prompt-options">
          {["브레인스토밍", "정보 검색", "논문 검색"].map(item => (
            <label key={item}>
              <input
                type="radio"
                name="usage"
                value={item}
                checked={usage === item}
                onChange={(e) => setUsage(e.target.value)}
              />{item}
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="usage"
              value="기타"
              checked={usage === "기타"}
              onChange={() => setUsage("기타")}
            /> 기타
          </label>
          {usage === "기타" && (
            <input
              type="text"
              placeholder="입력하세요"
              className="prompt-input-custom"
              value={customUsage}
              onChange={(e) => setCustomUsage(e.target.value)}
            />
          )}
        </div>
      </section>

      {/* 답변 스타일 */}
      <section className="prompt-section">
        <label className="prompt-label">
          희망하는 답변 스타일
          <span onClick={() => setShowStyleHelp(!showStyleHelp)} className="prompt-help">?</span>
        </label>
        {showStyleHelp && (
          <p className="prompt-help-text">
            어떤 식으로, 어떤 내용을 포함하여 답변해주었으면 하는지를 알려주세요.
          </p>
        )}
        <div className="prompt-options">
          {["핵심 요약", "자세한 설명 제공", "출처 표기"].map(item => (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                checked={answerStyle.includes(item)}
                onChange={() => toggleAnswerStyle(item)}
              />{item}
            </label>
          ))}
          <label>
            <input
              type="checkbox"
              value="기타"
              checked={answerStyle.includes("기타")}
              onChange={() => toggleAnswerStyle("기타")}
            /> 기타
          </label>
          {answerStyle.includes("기타") && (
            <input
              type="text"
              placeholder="입력하세요"
              className="prompt-input-custom"
              value={customStyle}
              onChange={(e) => setCustomStyle(e.target.value)}
            />
          )}
        </div>
      </section>

      {/* 기존 질문 입력 */}
      <section className="prompt-section">
        <label className="prompt-label">
          기존에 입력한 질문 내용
          <span onClick={() => setShowQuestionHelp(!showQuestionHelp)} className="prompt-help">?</span>
        </label>
        {showQuestionHelp && (
          <p className="prompt-help-text">
            기존에 LLM에게 물어봤던 질문 내용을 자유롭게 입력해주세요.
          </p>
        )}

        <div className="monitor-container">
          <textarea
            className="monitor-screen"
            placeholder="운영체제 핵심 내용을 정리해줘."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="monitor-neck"></div>
          <div className="monitor-stand"></div>
        </div>

        <div className="btn-wrapper">
          <button className="prompt-btn" onClick={handleSubmit}>프롬프트 생성</button>
        </div>
      </section>
    </div>
  );
}