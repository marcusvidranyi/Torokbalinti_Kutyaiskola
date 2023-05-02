

const EventModal = ({ url, name, description, time, itemIndex, closeModal }) => {
    return (
        <div className="eventModal">
            <img src={url} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <button>Feliratkozás</button>
            <button onClick={closeModal}>Mégsem</button>
        </div>
    )
}

export default EventModal