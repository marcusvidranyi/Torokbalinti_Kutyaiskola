import { Link } from "react-router-dom";
import "./home.css";

import NavBar from "../components/NavBar";
import EventCard from "../components/EventCard";

import dog_screenshot from "../images/dog_screenshot.jpg";
import dog_screenshot_2 from "../images/dog_screenshot_2.jpg";
import dog_screenshot_3 from "../images/dog_screenshot_3.jpg";


import ContactForm from "../components/ContactForm";
import InfoBox from "../components/InfoBox";
import eventData from "../data/eventData";
import Dog from "../components/Dog";
import Ball from "../components/Ball";
import VideoBackground from "../components/VideoBackground";

/*VIDEOS*/

import dog_video_1 from "../videos/dog_video_1.mp4";
import dog_video_2 from "../videos/dog_video_2.mp4";
import dog_video_3 from "../videos/dog_video_3.mp4";




function Home() {

    /* let squareLength = (100 * Math.sqrt(2));
    console.log(squareLength);

    console.log(window.innerWidth); */


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
                        <VideoBackground
                            video1={dog_video_1}
                            placeHolderPicture={dog_screenshot}
                            categoryTitle={"HOBBI"} />
                    </Link>
                    <Link to="/sport" className="main_category_pictures">
                        <VideoBackground
                            video1={dog_video_2}
                            placeHolderPicture={dog_screenshot_2}
                            categoryTitle={"SPORT"} />
                    </Link>
                    <Link to="/szolgalati" className="main_category_pictures">
                        <VideoBackground
                            video1={dog_video_3}
                            placeHolderPicture={dog_screenshot_3}
                            categoryTitle={"SZOLGÁLATI"} />
                    </Link>

                </div>
                <div className="home_page_links_container">
                    <Link to="/elerhetoseg">Rólunk</Link>
                    <Link to="/panzio">Panzió</Link>
                    <Link to="/hirek">Hírek</Link>
                    <Link to="/partnerek">Partnerek</Link>
                </div>
            </section>
            <Ball />
            <Dog />
            <section className="event_section oxford_blue">
                <h2>PROGRAMOK</h2>
                <div className="eventCard_box">
                    {eventData.map((event, index) => {
                        return <EventCard {...event} key={index} itemIndex={index} />
                    })}
                </div>


            </section>
            <section className="contact_and_facebook_box">

                <div className="google_maps_box">
                    <div className="google_maps" dangerouslySetInnerHTML={{
                        __html: `<iframe width="100%" height="864.2" "frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%B6r%C3%B6kb%C3%A1lint%20T%C3%B3%20utca%20+(T%C3%B6r%C3%B6kb%C3%A1linti%20Kutyaiskola)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`
                    }} style={{ zIndex: "1" }} />
                </div>


                <div className="contact_form_box_container">
                    <InfoBox />
                    <ContactForm />
                </div>
                <div className="facebook_box">
                    <div className="facebook_feed" dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTorokbalintiKutyaiskola&tabs=timeline&width=600px&height=850px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height=864.2px style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
                    }} style={{ zIndex: "1" }} />
                </div>

            </section>

            {/* <section className="contact_page_section">

            </section> */}
            <section>
                <div className="footer">

                    <p>webfejlesztő:</p>
                    <a href="https://marcusvidranyi.com/">marcusvidranyi.com</a>

                </div>
            </section>

        </div >
    )
}

export default Home;