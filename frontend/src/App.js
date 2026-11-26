import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminPanel from "@/pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
