import React, { useState, useEffect, useRef } from "react";
import "../assets/css/contact.css";
import { typeText } from "../data/typing"; // ✅ Import function typing
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import kampus from "../assets/img/kmpus.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const typingRef = useRef(null); // ✅ Typing element

  // ✅ Trigger efek typing saat komponen dimount
  useEffect(() => {
    if (typingRef.current) {
      typeText(
        typingRef.current,
        "Welcome To Contact University Satya Terra Bhinneka",
        50
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Nama: ${formData.nama}\nEmail: ${formData.email}\nPesan: ${formData.pesan}`
    );
  };

  return (
    <div> 
      <p className="kon">
        <a href="/Contact">CONTACT</a>
      </p>
      
      <img className="kampus11" alt="kampus" src={kampus} />
<div className="bungkus"> 
      <p className="wee" ref={typingRef}></p> {/* ✅ Elemen yang diketik */}
 

      <form onSubmit={handleSubmit}>
        <p className="obj1">Hubungi Kami</p>
        <p className="obj2">
          Kami dengan senang hati mendengar opini, masukan, atau pertanyaan Anda
        </p>
        <p className="obj3">
          <input
            type="text"
            name="nama"
            placeholder="Masukkan Nama"
            value={formData.nama}
            onChange={handleChange}
          />
          <input
            className="obj6"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        <p className="obj4">
          <input
            type="text"
            name="pesan"
            placeholder="Pesan"
            value={formData.pesan}
            onChange={handleChange}
          />
        </p>
        <p className="obj5">
          <button type="submit">Kirim Pesan</button>
        </p>
      </form>

      <div>
        <ul className="contact56">
          <li><FaMapMarkerAlt /> Lokasi</li>
          <li>
            Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan,<br />
            Sumatera Utara 20128
          </li>
          <li><FaEnvelope /> Email</li>
          <li>office@satyaterrabhinneka.ac.id</li>
          <li><FaPhoneAlt /> Telepon</li>
          <li>(061) 8457702</li>
          <li>Sosial Media</li>
          <li className="sosmed-box">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Contact;
