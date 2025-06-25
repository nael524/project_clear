 import '../assets/css/header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <nav>
        <ul>
          <li className="St">
            ST<span className="Bh">Bhinneka</span>{" "}
          </li>
          <li className="home"> <Link to="/Beranda"  >
              Beranda
            </Link></li>
          <li className="sty"><Link to="/Fakultas">Fakultas</Link> </li>
          <li className="sty"><Link to="/Visi">Visi Misi</Link></li>
          <li className="sty"><Link to="/Fasilitas">Fasilitas</Link></li>
          <li className="sty"><Link to="/Contact">Contact Me</Link></li>
          <li>
            <button className="sty1"><Link to="/Login" className="sty1"> Login</Link>  </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
