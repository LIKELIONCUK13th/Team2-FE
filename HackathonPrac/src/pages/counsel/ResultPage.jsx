import React, { useState } from 'react';
import '../../styles/counsel/ResultPage.css';

export default function ResultPage() {
  const [responseText] = useState(
    `요즘 많이 지치셨던 것 같아요.
기분도 가라앉고, 집중도 잘 안 되고… 정말 애쓰고 계시네요.

오늘 하루만큼은 자신에게 조금 더 따뜻해져도 괜찮아요.
작은 산책이나 가벼운 스트레칭으로 몸을 환기해보는 건 어떨까요?

필요하다면 누군가에게 마음을 털어놓는 것도 좋은 방법이에요.
지금 이 순간, 당신은 충분히 잘하고 있어요.`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(responseText);
    alert('복사되었습니다!');
  };

  return (
    <div className="result-container">
      <h1 className="title">멘탈체크봇</h1>

      <section className="result-box">
        <div className="result-header">
          <h2>상담 결과</h2>
          <button className="copy-btn" onClick={handleCopy}>
            복사하기
          </button>
        </div>
        <textarea readOnly className="result-text" value={responseText} />
      </section>

      <section className="video-recommendation">
        <h3 className="video-title">추천 영상</h3>
        <p className="subtext">
          마음을 치유해줄 당신만의 짧은 휴식 영상 추천해드려요
        </p>
        <div className="video-list">
          <div className="video-box" />
          <div className="video-box" />
          <div className="video-box" />
        </div>
      </section>
    </div>
  );
}
