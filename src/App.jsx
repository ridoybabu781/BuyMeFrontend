import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/home/Homepage";
import Footer from "./components/layout/Footer";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <div className="bg-slate-900">
      <BrowserRouter>
        <Navbar />
        <div className="pt-16"></div>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        <div></div>
      </BrowserRouter>
    </div>
  );
}
