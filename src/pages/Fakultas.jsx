import "../assets/css/fakultas.css";
import fakultas from "../assets/img/fakultas.jpg";
import fakultas1 from "../assets/img/visi.jpg";
import fakultas2 from "../assets/img/infor.jpg";
import fakultas3 from "../assets/img/kesehatan.jpg";
import fakultas4 from "../assets/img/pertanian.jpg";
import { observeOnScroll } from "../data/scroll";
import { useEffect, useRef } from "react";

const Fakultas = () => {
  const imgRef = useRef(null);
  const typingRef1 = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(" .fade-target");

    const cleanups = [];

    elements.forEach((el) => {
      const cleanup = observeOnScroll({ current: el }, "fade-in");
      cleanups.push(cleanup);
    });

    if (typingRef1.current) {
      typeText(typingRef1.current, " I’m an Academic Achievements", 80);
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);
  return (
    <div>
      <img className="fakultas" src={fakultas} />
      <p className="conn">
        {" "}
        <a href="/Fakultas"> Fakultas</a>
      </p>
      <div className="fak">
        FAKULTAS
        <p className="isi">
          Secara berkelanjutan, Universitas Satya Terra Bhinneka akan
          menyelenggarakan Fakultas dan Program Studi yang relevan dengan
          kebutuhan pasar yang terus berubah
        </p>
        <div className="berbagam">
  <div className="fakultas-item fade-target">
    <img src={fakultas1} alt="Ekonomi" />
    <div className="label-overlay">Fakultas Ekonomi</div>
    <div className="prodi-dropdown">
      
    </div>
  </div>

  <div className="fakultas-item fade-target">
    <img src={fakultas2} alt="Ilmu Komputer" />
    <div className="label-overlay">Fakultas Ilmu Komputer</div>
    <div className="prodi-dropdown">
     
    </div>
  </div>

  <div className="berbagam1">
    <div className="fakultas-item fade-target">
      <img src={fakultas3} style={{marginTop:"-175px"}} alt="Kesehatan" />
      <div className="label-overlay" style={{top:"-670px",position:'relative',zIndex:'15'}}>Fakultas Kesehatan</div>
      <div className="prodi-dropdown">
        
      </div>
    </div>

    <div className="fakultas-item fade-target">
      <img style={{top:"-520px"}} src={fakultas4} alt="Pertanian" />
      <div className="label-overlay" style={{top:"-670px",position:'relative',zIndex:'15'}}>Fakultas Pertanian</div>
      <div className="prodi-dropdown">
       
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};
export default Fakultas;
