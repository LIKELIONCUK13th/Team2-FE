import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/counsel/DiagnosisForm.css';

function Question({ title, question }) {
  const options = [
    '매우 그렇다',
    '그렇다',
    '잘 모르겠다',
    '그렇지않다',
    '매우 그렇지않다',
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <strong>{title}</strong>
      <p>{question}</p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '0.5rem',
        }}
      >
        {options.map((opt, index) => (
          <label
            key={index}
            style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <input type="radio" name={title} value={opt} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function DiagnosisForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/ResultPage');
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ borderLeft: '6px solid #81c784', paddingLeft: '0.5rem' }}>
        멘탈체크봇
      </h1>

      <Question title="기분" question="요즘 전반적으로 기분이 좋은 편이다." />
      <Question title="수면" question="최근 며칠간 잠을 충분히 자고 있다." />
      <Question title="집중" question="일상에서 집중이 잘 되는 편이다." />
      <Question
        title="스트레스"
        question="스트레스를 많이 받고 있다고 느낀다."
      />
      <Question title="대인관계" question="주변 사람들과의 관계가 원만하다." />
      <Question title="자존감" question="나는 내가 괜찮은 사람이라고 느낀다." />

      <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <strong>기타</strong>
        <textarea
          placeholder="당신만의 고민이 있다면 여기에 적어주세요."
          style={{
            width: '100%',
            height: '100px',
            border: '3px solid #A9DAB1',
            borderRadius: '8px',
            padding: '0.5rem',
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#A9DAB1',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        상담 시작
      </button>
    </div>
  );
}
