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



    /*-----------CHECK OVERFLOW----------------------- */
    /* const documentWidth = document.documentElement.offsetWidth;

    document.querySelectorAll('*').forEach(element => {
        const box = element.getBoundingClientRect();

        if (box.left < 0 || box.right > documentWidth) {
            console.log(element);
            element.style.border = '1px solid red';
        }
    }); */


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
                    <Link to="/hobbi" className="main_category_videos">
                        <VideoBackground
                            dogVideo={dog_video_1}
                            placeHolderPicture={dog_screenshot}
                            categoryTitle={"HOBBI"} />
                    </Link>
                    <Link to="/sport" className="main_category_videos">
                        <VideoBackground
                            dogVideo={dog_video_2}
                            placeHolderPicture={dog_screenshot_2}
                            categoryTitle={"SPORT"} />
                    </Link>
                    <Link to="/szolgalati" className="main_category_videos">
                        <VideoBackground
                            dogVideo={dog_video_3}
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
                    {window.innerWidth > 645 ?
                        <div className="google_maps" dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.553185550362!2d18.90941821236936!3d47.45109647105578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e018fb14a27f%3A0xc87d8c5eb927e5b3!2zVMO2csO2a2LDoWxpbnRpIEt1dHlhaXNrb2xh!5e1!3m2!1sen!2shu!4v1682971994603!5m2!1sen!2shu" width="460px" height="864.2" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                        }} style={{ zIndex: "1" }} />
                        :
                        <div className="google_maps" dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.553185550362!2d18.90941821236936!3d47.45109647105578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e018fb14a27f%3A0xc87d8c5eb927e5b3!2zVMO2csO2a2LDoWxpbnRpIEt1dHlhaXNrb2xh!5e1!3m2!1sen!2shu!4v1682971994603!5m2!1sen!2shu" width="${Math.round((window.innerWidth /100) * 75)}px" height="464.2" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                        }} style={{ zIndex: "1" }} />
                    }
                </div>


                <div className="contact_form_box_container">
                    <InfoBox />
                    <ContactForm />
                </div>
                <div className="facebook_box">
                    {window.innerWidth > 645 ?
                        <div className="facebook_feed" dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTorokbalintiKutyaiskola&tabs=timeline&width=460px&height=850px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="460" height=864.2px style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
                        }} style={{ zIndex: "1" }} />
                        :
                        <div className="facebook_feed" dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTorokbalintiKutyaiskola&tabs=timeline&width=${Math.round((window.innerWidth /100) * 75)}px&height=850px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height=464.2px style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
                        }} style={{ zIndex: "1" }} />
                    }
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