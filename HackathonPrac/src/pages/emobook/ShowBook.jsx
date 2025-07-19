import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/emobook/ShowBook.css";
import NaviBar_sh from "../../components/NaviBar_sh";
// import axios from "axios"; // ✅ 연결 시 주석 해제하여 axios 사용

export default function ShowBook() {
    const navigate = useNavigate();

    /* ✅ 연결 시 사용 예정
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/recommend-book/result")
            .then((res) => setBooks(res.data.books))
            .catch((error) => console.error("추천 결과 가져오기 실패:", error));
    }, []);
    */

    const books = [
        {
            title: "우울할 때 읽는 책",
            author: "홍길동",
            summary: "위로가 되는 이야기.",
        },
        {
            title: "마음 돌보기",
            author: "김철수",
            summary: "마음을 편안하게 해주는 에세이.",
        },
    ];

    return (
        <div className="show-container">
            <NaviBar_sh />

            <h1 className="EmoBook-title">감정 기반 책 추천</h1>

            {books.map((book, index) => (
                <div key={index} className="book-card">
                    <h2>{book.title}</h2>
                    <p>저자: {book.author}</p>
                    <p>{book.summary}</p>
                </div>
            ))}
        </div>
    );
}
