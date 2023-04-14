import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import tbk_logo10 from "../images/tbk_logo10.png"

const NavBar = () => {


    // to change burger classes
    const [burgerClass, setBurgerClass] = useState("burger_bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    //toggle burger menu change
    

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger_bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger_bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    


    return (
        <>
            <div className="navbar_container">

                <div className="logo_and_hamburger">
                    <img src={tbk_logo10} className="main_logo" />
                    <div className="burger_menu" onClick={updateMenu}>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                        <div className={burgerClass}></div>
                    </div>
                </div>
                <div className={window.innerWidth > 479 ? "menu visible" : menuClass}>
                    <div className="burger_links">
                        <Link to="/">Home</Link>
                        <Link to="/kikepzok">Kiképzők</Link>
                        <Link to="/galeria">Gagléria</Link>
                        <Link to="/elerhetoseg">Elérhetőség</Link>
                        <Link to="/panzio">Panzió</Link>
                        <Link to="/hirek">Hírek</Link>
                        <Link to="/partnerek">Partnerek</Link>
                        <Link to="/aszf">Ászf</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar