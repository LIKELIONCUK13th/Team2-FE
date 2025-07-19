import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import EmoInput from "./pages/emobook/EmoInput"; // 예준
import ShowBook from "./pages/emobook/ShowBook"; // 예준

import DiagnosisForm from "./pages/counsel/DiagnosisForm"; // 가연
import ResultPage from "./pages/counsel/ResultPage"// 가연

import PromptInput from "./pages/prompt/PromptInput"; // 서현
import PromptOutput from "./pages/prompt/PromptOutput"; // 서현

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* 예준 */}
        <Route path="/EmoInput" element={<EmoInput />} />
        <Route path="/ShowBook" element={<ShowBook />} />

        {/* 가연 */}
        <Route path="/DiagnosisForm" element={<DiagnosisForm />} />
        <Route path="/ResultPage" element={<ResultPage />} />

        {/* 서현 */}
        <Route path="/PromptInput" element={<PromptInput />} />
        <Route path="/PromptOutput" element={<PromptOutput />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);