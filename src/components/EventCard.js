import { useState } from "react";
import EventModal from "./EventModal";
import eventData from "../data/eventData";

const EventCard = ({ url, name, description, time, itemIndex, address, place, price }) => {

    const [eventModal, setEventModal] = useState(false);
    const [eventKey, setEventKey] = useState(0);


    const handleOpenModal = (key) => (event) => {
        event.preventDefault();
        setEventModal(true);
        setEventKey(key);

        /* Prevent Scrolling if modal is open */
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const onClose = () => {
        setEventModal(false);
        /* Unset background scrolling if modal is closed */
        document.body.style.overflow = 'unset';
    }

    return (
        <>
            {eventModal &&
                eventData.map((modal, index) => {
                    if (eventKey === index) {
                        return <EventModal {...modal} key={index} closeModal={onClose} />
                    }
                })
            }
            <div className="eventCard_container">
                <div className="eventCard_img_container">
                    <img src={url} />
                </div>
                <div className="eventCard_body_container">
                    <div className="eventCard_overlay"></div>
                    <div className="event_info">
                        <p className="event_title">{name}</p>
                        <div className="separator"></div>
                        <p className="info">{address}</p>
                        <h3 className="far fa-calendar-alt"> 
                            {time}
                        </h3>

                        <div className="additional-info">
                            <p className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                {place}
                            </p>
                            <div className="info">
                                <p className="price">{price}</p>
                            </div>

                            <p className="info description">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={handleOpenModal(itemIndex)} className="action">Feliratkozás</button>
            </div>
        </>
    )
}

export default EventCard
