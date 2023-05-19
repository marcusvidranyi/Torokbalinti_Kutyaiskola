import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import tbk_logo10 from "../images/tbk_logo10.png"

const NavBar = forwardRef((props, ref) => {



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

    /*-----------Page Navigation----------------------- */




    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
            speed: 'slow'
        });
    };



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
                <div className={window.innerWidth > 900 ? "menu visible" : menuClass}>
                    <div className="burger_links">
                        <Link to="/">HOME</Link>
                        <Link to="/kikepzok">KIKÉPZŐK</Link>
                        <Link to="/galeria">GALÉRIA</Link>
                        <Link onClick={() => scrollToRef(ref)}>ELÉRHETŐSÉG</Link>
                        <Link to="/panzio">PANZIÓ</Link>
                        <Link to="/hirek">HíREK</Link>
                        <Link to="/partnerek">PARTNEREK</Link>
                        <Link to="/aszf">ÁSZF</Link>
                    </div>
                </div>

            </div>
        </>
    )
});

export default NavBar