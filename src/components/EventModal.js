

const EventModal = ({ url, name, description, time, itemIndex, closeModal }) => {
    return (
        <div className="eventModal">
            <h1>Ez a rész jelenleg fejlesztés alatt áll'</h1>
            <img src={url} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <button>Feliratkozás</button>
            <button onClick={closeModal}>Mégsem</button>
            <h1>Ez a rész jelenleg fejlesztés alatt áll'</h1>
        </div>
    )
}

export default EventModal