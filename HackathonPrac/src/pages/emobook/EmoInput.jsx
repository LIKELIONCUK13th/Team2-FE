import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/emobook/EmoInput.css";
import NaviBar_sh from "../../components/NaviBar_sh";
// import axios from "axios"; // ✅ 연결 시 주석 해제하여 axios 사용

export default function EmoInput() {
    const [emotion, setEmotion] = useState("");
    const navigate = useNavigate();

    const handleRecommend = () => {
        console.log("입력된 감정:", emotion);

        /* ✅ 연결 시 사용
        axios.post("http://localhost:5000/api/recommend-book", { feeling: emotion })
            .then(() => navigate("/ShowBook"))
            .catch((error) => console.error("추천 요청 실패:", error));
        */

        navigate("/ShowBook"); // ✅ 현재는 더미 이동으로 유지, 연결 시 위 axios 부분 사용
    };

    return (
        <div className="emo-container">
            <NaviBar_sh />

            <h1 className="EmoBook-title">감정 기반 책 추천</h1>

            <div className="emo-input-wrapper">
                <input
                    className="emo-input"
                    type="text"
                    placeholder="오늘의 감정을 입력해주세요. (예: 행복, 우울, 설렘)"
                    value={emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                />
                <button className="recommend-book" onClick={handleRecommend}>
                    책 추천 받기
                </button>
            </div>
        </div>
    );
}
