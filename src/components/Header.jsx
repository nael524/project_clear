import '../assets/css/header.css';
import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <header>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <nav>
        <ul>
          <li className="St">
            ST<Link to="/Beranda"><span className="Bh">Bhinneka</span></Link>
          </li>
          <li className="home"><Link to="/Beranda">BERANDA</Link></li>
          <li className="sty"><Link to="/Fakultas">FAKULTAS</Link></li>
          <li className="sty"><Link to="/Visi">VISI MISI</Link></li>
          <li className="sty"><Link to="/Fasilitas">FASILITAS</Link></li>
          <li className="sty"><Link to="/Contact">CONTACT ME</Link></li>
          <li className="sty12">
            <Link to="/Login" className="sty1">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
