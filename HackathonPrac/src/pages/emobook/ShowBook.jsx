import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/emobook/ShowBook.css";
import NaviBar_sh from "../../components/NaviBar_sh"; // <NaviBar_sh /> 형태로 네비게이션 바 사용 가능

export default function ShowBook() { // jsx파일명 == functino명이어여 함, 파일명을 수정하는 게 아닌 이상 건들지 말 것!
  return (
    <div>
        <NaviBar_sh />
        <h1>ShowBook</h1>
    </div>
  );
}