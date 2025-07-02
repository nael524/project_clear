// src/components/Footer.jsx
import "../assets/css/footer.css"; // pastikan path sesuai
import logo from "../assets/img/logo1.png"
export default function Footer() {
  return (
    <footer className="fixed-bottom">
      {" "}
      {/* atau "push-to-bottom" */}
      <div className="footer-inner">
        <img className="logo" alt="logo" src={logo}/>
        <a className="teks">
          {" "}
          Mari menjadi bagian dari Universitas Satya Terra Bhinneka:
          Berkebhinekaan, Berkelanjutan. Alma mater generasi muda yang kritis,
          kompeten, berdaya saing, serta berkesadaran ekologis dan
          multikultural.
        </a>

        <a className="kampus">
          Kampus <br />
          <a href="/Contact">Kontak</a>
          <br />
          <a href="/Fasilitas">Fasilitas</a>
          <br />
          <a href="/Visi">Visi Misi</a><br />
           <a href="/Fakultas">Fakultas</a>
        </a>
     <div className="footer-inner" style={{marginTop:"-50px"}}>
        <section className="footer-location"> 
          <div className="map-wrapper"><span style={{fontSize:"30px",left:'-10px',fontWeight:'bold'}}>Lokasi</span> 
            <iframe
              title="Lokasi Universitas Satya Terra Bhinneka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.2375569463782!2d98.61115666401117!3d3.5868278279784047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312e24fa040e3f%3A0xb4d49f8ee305fcf2!2sJl.%20Sunggal%20Gg.%20Bakul%2C%20Sunggal%2C%20Kec.%20Medan%20Sunggal%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020128!5e0!3m2!1sen!2sid!4v1720100000000!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <address className="address">
            Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128
          </address>
        </section>
         
      </div>
        <span>© 2025 Universitas Satya Terra Bhinneka </span>
      </div>
    </footer>
  );
}
