import React from "react";
import "../assets/css/visimisi.css";
import visi from "../assets/img/visi.jpg"
const Visi = () => {
  return (
     <div>
       <p className="imgBack"><img src={visi}/> </p>
       <p className="link">VISI MISI<br /><a href="/Beranda">Beranda</a><a href="/Visi"> Visi-Misi</a></p>   
       
       <p className="visi"><span className="visi1">VISI </span><br />“Menjadi perguruan tinggi yang unggul dalam mengembangkan ilmu pengetahuan, teknologi, dan penelitian yang berbasis prinsip berkelanjutan, berwawasan global, inovatif, dan inklusif untuk meningkatkan pembangunan manusia Indonesia secara holistik pada tahun 2048.”</p>
      <p className="misi"><span className="misi1">MISI</span>
         <li><span className="no1">1</span> Menyelenggarakan pendidikan berbasis teknologi dan penelitian, berprinsip inklusif, berwawasan global, berkelanjutan, dan bermanfaat.</li>
        <li><span className="no2">2</span> Menyelenggarakan penelitian yang kolaboratif, interdisipliner, inovatif, dan bermanfaat</li>
         <li><span className="no3">3</span> Menyelenggarakan pengabdian kepada masyarakat yang efektif, partisipatif, dan tepat sasaran.</li>
        <p className="misi2"> 
         <li><span className="no4">4</span>Membangun ekosistem universitas yang berkelanjutan, inklusif, egaliter, suportif, dan demokratis.</li><br></br>
         <li><span className="no5">5</span>Mengembangkan kualitas dan kompetensi civitas akademika.</li>
        </p>
      </p>
       <p className="tujuan"><span className="misi1">TUJUAN</span>
         <li><span className="no1">1</span> Mengembangkan pembelajaran yang berkualitas.</li>
        <li><span className="no2">2</span> <br /> Membangun ekosistem yang mendukung penelitian berkualitas dan kredibel.</li>
         <li><span className="no3">3</span> <br />Membangun ekosistem yang mendukung terlaksananya pengabdian kepada masyarakat yang bermanfaat</li>
        <p className="misi2"> 
         <li><span className="no4">4</span>Mengembangkan kemitraan lintas sektor dan pemangku kepentingan baik di tingkat regional, nasional, maupun internasional.</li><br></br>
         <li><span className="no5">5</span>Mengembangkan kualitas dan kompetensi civitas akademika.</li>
        </p>
        <div className="nilai"><span className="nilo">Nilai</span> 
          <nav><ul className="beri">
            <span className="beri1"> BERIMAN</span> 
            <li>1.Religius</li>
             <li>2.Berakhlak Mulia</li>
               
          </ul>
          <ul className="bud"><span className="bud1">BERDAYA KARYA</span>
            <li>1.Cerdas</li>
             <li>2.Bernalar Kritis</li>
             <li>3.Mandiri</li> 
             <li>4.Kreatif</li>
             <li>5.Produktif</li>
             <li>6.Inovatif</li>
             <li>7.Kolaboratif</li>
             <li>8.Kewirausahaan</li>
          </ul>
          <ul className="berbudaya"><span className="beri2"> BERBUDAYA</span> 
            <li>1.Humanis</li>
            <li>2.Toleransi</li>
            <li>3.Integritas</li>
          </ul>
          <ul className="berbin"><span className="beri3"> BERBHINNEKA</span> 
            <li>1.Cinta Tanah Air</li>
            <li>2.Inklusif</li>
            <li>3.Anti-Diskriminasi</li>
          </ul>
          <ul className="berke"><span className="beri4"> BERKELANJUTAN</span> 
            <li>1.Peduli Lingkungan</li>
            <li>2.Pembelajar Seumur Hidup</li>
            
          </ul>
          </nav>
        </div>
      </p>
     </div>
  );
};

export default Visi;
