import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/kikepzok">Kiképzők</Link>
                <Link to="/galeria">Gagléria</Link>
                <Link to="/elerhetoseg">Elérhetőség</Link>
                <Link to="/aszf">Ászf</Link>
            </nav>
        </>
    )
}

export default NavBar