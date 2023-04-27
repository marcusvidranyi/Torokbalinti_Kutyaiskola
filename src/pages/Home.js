import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../components/NavBar";
import hobbi from "../images/hobbi.jpg";
import sport from "../images/sport.jpg";
import szolgalati from "../images/szolgalati.jpg";
import ContactForm from "../components/ContactForm";
import InfoBox from "../components/InfoBox";





function Home() {

    let squareLength = (100 * Math.sqrt(2))
    console.log(squareLength)

    console.log(window.innerWidth)


    return (
        <div className="home_container">
            <section className="hero_page_container">
                <NavBar />
                <div className="home_page_links_container">
                    <Link to="/">Home</Link>
                    <Link to="/kikepzok">Kiképzők</Link>
                    <Link to="/galeria">Gagléria</Link>
                    <Link to="/elerhetoseg">Elérhetőség</Link>
                    {/* <Link to="/aszf">Ászf</Link> */}
                </div>
                <div className="main_category_class">
                    <Link to="/hobbi" className="main_category_pictures">
                        <img className="main_category_pictures" src={hobbi} />
                        <div className="category_image_text_hobbi">HOBBI</div>
                    </Link>
                    <Link to="/sport" className="main_category_pictures">
                        <img className="main_category_pictures" src={sport} />
                        <div className="category_image_text_sport">SPORT</div>
                    </Link>
                    <Link to="/szolgalati" className="main_category_pictures">
                        <img className="main_category_pictures" src={szolgalati} />
                        <div className="category_image_text_szolgalati">SZOLGÁLATI</div>
                    </Link>

                </div>
                <div className="home_page_links_container">
                    <Link to="/elerhetoseg">Rólunk</Link>
                    <Link to="/panzio">Panzió</Link>
                    <Link to="/hirek">Hírek</Link>
                    <Link to="/partnerek">Partnerek</Link>
                </div>
            </section>
            <section className="contact_and_facebook_box">


                <div /* style={{ marginRight: "160px" }} */ dangerouslySetInnerHTML={{
                    __html: `<iframe width=${window.innerWidth / 4} height="845" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%B6r%C3%B6kb%C3%A1lint%20T%C3%B3%20utca%20+(T%C3%B6r%C3%B6kb%C3%A1linti%20Kutyaiskola)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`
                }} />


                <div className="contact_form_box_container">
                    <InfoBox />
                    <ContactForm />
                </div>
                
                <div dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTorokbalintiKutyaiskola&tabs=timeline&width=600px&height=850px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500px" height=850px style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
                }} />

            </section>

            {/* <section className="contact_page_section">

            </section> */}
            <div className="ribbon_box">





            </div>

        </div>
    )
}

export default Home;