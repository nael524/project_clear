import "../assets/css/beranda.css";
import { observeOnScroll } from "../data/scroll";
import React, { useEffect, useRef } from "react";
import { typeText } from "../data/typing";
import dilaImg from "../assets/img/dila.png";
import dr from "../assets/img/drsofyantan.png";
import tr from "../assets/img/tracey.png";
import inf1 from "../assets/img/if1.jpg";
import inf2 from "../assets/img/if2.jpeg";
import inf3 from "../assets/img/if3.jpeg";
import inf4 from "../assets/img/if4.jpeg";
import un1 from "../assets/img/un1.jpg";
import un2 from "../assets/img/un2.jpg";
import un3 from "../assets/img/un3.jpg";

const Beranda = () => {
  const imgRef = useRef(null);
  const typingRef1 = useRef(null);
  const typingRef2 = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".dr, .tracey,.imginfor,.imginfor1,.imginfor11"
    );

    const cleanups = [];

    elements.forEach((el) => {
      const cleanup = observeOnScroll({ current: el }, "fade-in");
      cleanups.push(cleanup);
    });

    if (typingRef1.current) {
      typeText(typingRef1.current, " I’m an Academic Achievements", 80);
    }

    if (typingRef2.current) {
      typeText(typingRef2.current,"Let's grow together — because together with universities, we can definitely progress. ",80 );
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <div>
      <div className="rectangle">
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif&display=swap"
          rel="stylesheet"
        />

        <p>HELLO....</p>

        <h1>
          WELCOME TO <span className="univ">UNIVERSITY </span> <br />
          SATYA TERRA<span className="univ"> BHINNEKA </span> <br /> <br />
          <p className="tekss" ref={typingRef1}></p>
        </h1>
        <img src={dilaImg} alt="dila" />
        <p className="Motiv"> </p>
      </div>
      <div>
        <h2 className="pendiri">
          <img className="dr" ref={imgRef} src={dr} alt="pendiri" />
        </h2>
        <p className="bio">
          Dr. Sofyan Tan Ketua Dewan Pembina YPSIM Anggota Komisi X DPR RI
          <br /> Pendiri Universitas Satya Terra Bhinneka
        </p>
      </div>
      <p className="narasi">
        <p className="jud">
          Sambutan Pendiri Yayasan Perguruan Sultan Iskandar Muda
        </p>
        Salam Sejahtera, Assalamualaikum, Om Swastiastu, Namo Buddhaya, Salam
        Kebajikan, HorasF Berawal dari kegelisahan melihat segregasi sosial,
        ketimpangan ekonomi, serta diskriminasi rasial dan yang berbasis
        agama/kepercayaan, saya memutuskan untuk meninggalkan karir saya sebagai
        dokter demi mendirikan Yayasan Perguruan Sultan Iskandar Muda (YPSIM).
        Selain untuk memperkuat nilai-nilai keberagaman, kesetaraan, dan
        keberlanjutan, yayasan tersebut juga diharapkan mampu memfasilitasi
        tumbuh-kembang minat dan potensi anak muda lintas agama, suku, dan kelas
        sosial-ekonomi. Demi mencapai niat mulia di atas, YPSIM menyelenggarakan
        pendidikan mulai dari tingkat anak usia dini, dasar, menengah bawah,
        menengah atas, dan kejuruan. Tahun ini, di usianya yang ke-35, YPSIM
        merintis pembangunan Universitas Satya Terra Bhinneka. Sesuai dengan
        filosofi namanya, Universitas Satya Terra Bhinneka didesain menjadi
        universitas yang berkesadaran keberagaman dan keberlanjutan dengan
        komitmen penuh terhadap kebenaran ilmu pengetahuan dan kebaikan
        kemanusiaan. Harapan saya, Universitas Satya Terra Bhinneka dapat
        melahirkan lulusan yang tidak hanya memiliki kompetensi global, tetapi
        juga berkesadaran keberagaman serta mampu memberi dampak positif yang
        berkelanjutan.
      </p>
      <div style={{ marginTop: "500px" }}>
        <img className="tracey" ref={imgRef} src={tr} alt="rektor" />
        <p className="biotra">
          Dr. Tracey Yani Harjatanaya, B.A., M.A., M.Sc, DPhil, Rektor
          Universitas Satya Terra Bhinneka
        </p>
        <p className="teksbio">
          <span className="jud2">
            Sambutan Rektor Universitas Satya Terra Bhinneka
          </span>
          <br />
          Di tengah disrupsi teknologi dan krisis iklim yang mengancam, peran
          perguruan tinggi dalam mempersiapkan generasi mendatang yang kompeten
          dan berkesadaran ekologis menjadi semakin penting. Untuk menjawab
          tantangan tersebut, Universitas Satya Terra Bhinneka melaksanakan,
          pertama, pembelajaran holistik yang mengintegrasikan sesi di dalam
          kelas dan di luar kelas serta mendorong mata kuliah interdisipliner,
          Kedua, menjaring dosen profesional lulusan dalam dan luar negeri,
          mempersiapkan fasilitas pembelajaran yang memadai dan budaya kuliah
          yang inklusif Ketiga, kami membangun Centre for Research, Innovation,
          Sustainability, and Entrepreneurship untuk peningkatan kualitas riset
          dan memfasilitasi minat mahasiswa dalam berwirausaha dan berinovasi.
          Keempat, membangun jejaring dan kemitraan lintas pemangku kepentingan
          secara lokal, nasional, dan internasional untuk mendukung pembelajaran
          yang menjawab kebutuhan di masa kini dan masa datang. Kelima,
          membangun ekosistem civitas akademika bagi dosen dan mahasiswa yang
          mendorong kualitas pembelajaran, penelitian, dan pengabdian kepada
          masyarakat semakin optimal. Dengan keyakinan bahwa perguruan tinggi
          harus menjadi “alma mater” (ibu asuh), kami percaya bahwa perguruan
          tinggi harus menjadi ruang di mana keberagaman dirayakan, inklusivitas
          dirawat, kesadaran ekologis diperkuat, dan potensi mahasiswa didukung
          untuk tumbuh. Kami percaya bahwa dengan upaya kolaboratif dan visioner
          tersebut, Universitas Satya Terra Bhinneka dapat menjadi kampus
          terdepan di Indonesia yang menginkorporasi “kurikulum hijau” dan
          konsep inklusivitas ke dalam pembelajaran sambil tetap adaptif
          terhadap, dan inovatif untuk menjawab, kebutuhan industri yang
          akseleratif dan isu sosial yang mendesak. Mari bertumbuh bersama
          Universitas Satya Terra Bhinneka.
        </p>
      </div>
      <p className="inf">INFORMASI DI UNIVERSITAS SATYA TERRA BHINNEKA</p>
      <h1 className="informasi">
        <img className="imginfor" ref={imgRef} src={inf1} alt="infor" />
        <img className="imginfor11" ref={imgRef} src={inf2} alt="infor" />
      </h1>
      <h1 className="informasi1">
        <img className="imginfor1" src={inf3} ref={imgRef} alt="infor" />
        <img
          className="imginfor1"
          src={inf4}
          ref={imgRef}
          alt="infor"
          style={{ marginTop: "28px" }}
        />
      </h1>
      <h1 className="un" style={{ marginTop: "450px" }}>
        <img className="un5" src={un1} style={{ width: "400px" }} />
        <p className="teksmaju" ref={typingRef2}></p>
        <p className="un3" style={{ marginTop: "-800px" }}>
          <span className="un4">
            {" "}
            Kembangkan potensi dan kompetensi diri di
          </span>{" "}
          <br />
          <span className="un2">Universitas Satya Terra Bhinneka</span> <br />
          1.Lingkungan belajar yang suportif dan inklusif <br />
          2.Dosen yang kompeten, berpengalaman, dan berdedikasi tinggi <br />
          3.Fasilitas penunjang yang memadai <br />
          4.Kurikulum terintegrasi dan berkelanjutan
        </p>
        <p className="un1">
          <img src={un2} style={{ width: "300px" }} />
          <img src={un3} style={{ width: "250px", marginTop: "30px" }} />
        </p>
      </h1>
    </div>
  );
};

export default Beranda;
