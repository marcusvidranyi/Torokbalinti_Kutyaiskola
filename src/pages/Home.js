import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../components/NavBar";
import SecondNavBar from "../components/SecondNavBar";
import logo from "../images/logo.jpg"

function Home() {
    return (
        <div className="home_container">
            <NavBar />
            <img src={logo} className="main_logo"/>
            <rb></rb>
            <SecondNavBar />
            <div>Home</div>
        </div>
    )
}

export default Home;