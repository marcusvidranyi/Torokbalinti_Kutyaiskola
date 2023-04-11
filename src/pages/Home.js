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
                <div className="category_image_text">HOBBI</div>
                <img className="main_category_pictures" src={sport} />
                <div className="category_image_text">SPORT</div>
                <img className="main_category_pictures" src={szolgalati} />
                <div className="category_image_text">SZOLGÁLATI</div>

            </div>
            <div className="home_page_links_container">
                <Link to="/elerhetoseg">Rólunk</Link>
                <Link to="/panzio">Panzió</Link>
                <Link to="/hirek">Hírek</Link>
                <Link to="/partnerek">Partnerek</Link>
            </div>
            <div className="facebook_feed">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTorokbalintiKutyaiskola&tabs=timeline&width=350&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="350" height="700" /* style="border:none;overflow:hidden" */ scrolling="no" frameBorder="0" /* allowFullscreen="true" */ allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>

        </div>
    )
}

export default Home;