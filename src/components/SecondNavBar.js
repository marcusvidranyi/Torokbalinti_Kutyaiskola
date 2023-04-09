import { Link } from "react-router-dom";

const SecondNavBar = () => {
    return (
        <>
            <nav>
                <Link to="/elerhetoseg">Rólunk</Link>
                <Link to="/panzio">Panzió</Link>
                <Link to="/hirek">Hírek</Link>
                <Link to="/partnerek">Partnerek</Link>
            </nav>
        </>
    )
}

export default SecondNavBar