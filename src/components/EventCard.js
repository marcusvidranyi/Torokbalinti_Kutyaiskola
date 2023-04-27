import { useState } from "react";
import EventModal from "./EventModal";
import eventData from "../data/eventData";

const EventCard = ({ url, name, description, time, itemIndex }) => {

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
            <div className="eventCard">
                <img src={url} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{time}</p>
                <button onClick={handleOpenModal(itemIndex)}>Feliratkozás</button>
            </div>
        </>
    )
}

export default EventCard