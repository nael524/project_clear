import "../assets/css/fasilitas.css";
import lab from "../assets/img/infor.jpg";
import per from "../assets/img/pertanian.jpg";
import kant from "../assets/img/visi.jpg";
import audit from "../assets/img/audit.webp";
import React, { useState, useRef, useEffect } from 'react'; 

const Fasilitas = () => {
  const [selected, setSelected] = useState(null);
  const penjelasanRef = useRef(null);

  const dataFasilitas = [
    {
      id: 1,
      img: lab,
      title: "Laboratorium",
      deskripsi:
        "Laboratorium adalah tempat yang disediakan untuk kegiatan praktik, eksperimen, dan penelitian ilmiah, baik di bidang sains, komputer, teknik, maupun bidang lainnya. Laboratorium dilengkapi dengan alat-alat dan perangkat teknologi sesuai kebutuhan jurusan/program studi.",
    },
    {
      id: 2,
      img: per,
      title: "Perpustakaan",
      deskripsi:
        "Perpustakaan adalah pusat informasi dan referensi akademik yang menyediakan koleksi buku, jurnal, skripsi, e-book, dan sumber daya digital lainnya. Fasilitas ini biasanya dilengkapi dengan area baca, ruang diskusi, komputer akses data, hingga layanan peminjaman dan pengembalian buku.",
    },
    {
      id: 3,
      img: kant,
      title: "Kantin",
      deskripsi:
        "Kantin adalah fasilitas umum yang menyediakan makanan dan minuman bagi seluruh sivitas akademika kampus. Lokasinya biasanya strategis, mudah dijangkau, dan dilengkapi dengan meja, kursi, serta area makan yang nyaman dan bersih.",
    },
    {
      id: 4,
      img: audit,
      title:"Auditorium",
      deskripsi: "Auditorium merupakan ruang besar yang biasanya digunakan untuk kegiatan formal atau semi-formal. Fasilitas ini dirancang untuk menampung banyak orang dalam satu waktu dan dilengkapi dengan sistem audio-visual yang lengkap seperti proyektor, pengeras suara, AC, dan tata pencahayaan yang baik.",
    },
  ];
useEffect(() => {
  if (selected && penjelasanRef.current) {
    // kasih delay sedikit supaya elemen sudah muncul
    setTimeout(() => {
      penjelasanRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end", // "start" kalau mau lebih ke atas
      });
    }, 50);
  }
}, [selected]);

  return (
    <div>
      <p className="fas">FASILITAS</p>
      <ul className="fasilitas">
        <li className="gamb1" onClick={() => setSelected(dataFasilitas[0])}>
          <img src={lab} />
        </li>
        <li className="gamb2" onClick={() => setSelected(dataFasilitas[1])}>
          <img src={per} />
        </li>
        <li className="gamb3" onClick={() => setSelected(dataFasilitas[2])}>
          <img src={kant} />
        </li>
        <li className="gamb4" onClick={() => setSelected(dataFasilitas[3])}>
          <img src={audit} />
        </li>
      </ul>
    {selected && (
  <div className="penjelasan" ref={penjelasanRef}>
    <img
      src={selected.img}
      alt={selected.title}
      className="penjelasan-img"
    />
    <div className="penjelasan-teks">
      <h3>{selected.title}</h3>
      <p>{selected.deskripsi}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default Fasilitas;
