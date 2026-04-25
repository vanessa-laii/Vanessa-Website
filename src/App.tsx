import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HamiltonGuide from "./pages/HamiltonGuide";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/hamilton-guide" element={<HamiltonGuide />} />
      </Routes>
    </BrowserRouter>
  );
}
