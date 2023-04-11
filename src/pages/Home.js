import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../components/NavBar";
import SecondNavBar from "../components/SecondNavBar";
import logo from "../images/logo.jpg";
import hobbi from "../images/hobbi.jpg";
import sport from "../images/sport.jpg";
import szolgalati from "../images/szolgalati.jpg"


function Home() {
    return (
        <div className="home_container">
            <NavBar />
            <div className="home_page_links_container">
                <Link to="/">Home</Link>
                <Link to="/kikepzok">Kiképzők</Link>
                <Link to="/galeria">Gagléria</Link>
                <Link to="/elerhetoseg">Elérhetőség</Link>
                <Link to="/aszf">Ászf</Link>
            </div>
            <div className="main_category_class">
                <img className="main_category_pictures" src={hobbi} />
                <img className="main_category_pictures" src={sport} />
                <img className="main_category_pictures" src={szolgalati} />

            </div>
            <div className="home_page_links_container">
                <Link to="/elerhetoseg">Rólunk</Link>
                <Link to="/panzio">Panzió</Link>
                <Link to="/hirek">Hírek</Link>
                <Link to="/partnerek">Partnerek</Link>
            </div>

        </div>
    )
}

export default Home;