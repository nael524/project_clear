// src/App.jsx
import "../src/assets/css/app.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Fakultas from "./pages/Fakultas";
import Visi from "./pages/Visi";
import Fasilitas from "./pages/Fasilitas";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <>
      {!isLoginPage && <Header />}

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Beranda" element={<Beranda />} />
          <Route path="/Fakultas" element={<Fakultas />} />
          <Route path="/Visi" element={<Visi />} />
          <Route path="/Fasilitas" element={<Fasilitas />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
