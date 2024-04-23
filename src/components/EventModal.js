import { useState, useRef } from "react";
import "./eventModal.css";
import emailjs from '@emailjs/browser';

function EventModal({ url, name, description, time, itemIndex, closeModal }) {

    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [dogName, setDogName] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [dogAge, setDogAge] = useState("");
    const [error, setError] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if (ownerName.length == 0 || ownerEmail.length == 0) {
            setError(true)
            return
        }
        emailjs.sendForm('service_mr17u6a', 'TBK-template', form.current, '5XkFYpvBwSaEXEGXt')
            .then((result) => {
                console.log(result.text);
                alert("üzenet elküldve!");
                closeModal();
            }, (error) => {
                console.log(error.text);
                alert("üzenetet nem sikerült elküldeni!")
            });
            e.target.reset();
    };

    return (
        <div className="eventModal">
            <form ref={form} onSubmit={sendEmail} className="eventModal_form">

                <div className="inputBox">
                    <span>Név</span>
                    <input type="text" name="owner_name" onChange={e => setOwnerName(e.target.value)} />
                    {error && ownerName.length <= 0 ?
                        <span>A nevet nem hagyhatja üresen!</span> : ""}
                </div>

                <div className="inputBox">
                    <span>Email</span>
                    <input
                        type="email"
                        name="owner_email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}"
                        onChange={e => setOwnerEmail(e.target.value)}
                    />
                    {error && ownerEmail.length <= 0 ?
                        <span>Adjon meg egy érvényes E-mail címet!</span> : ""}
                </div>

                <div className="inputBox">
                    <span>Telefon</span>
                    <input type="tel" name="user_phone" />
                </div>

                <div className="inputBox">
                    <span>Kutya neve</span>
                    <input type="text" name="dog_name" onChange={e => setDogName(e.target.value)} />
                    {error && dogName.length <= 0 ?
                        <span>A kutya nevét nem hagyhatja üresen!</span> : ""}
                </div>

                <div className="inputBox">
                    <span>Kutya fajtája</span>
                    <input type="text" name="dog_breed" onChange={e => setDogBreed(e.target.value)} />
                    {error && dogBreed.length <= 0 ?
                        <span>A kutya fajtáját nem hagyhatja üresen!</span> : ""}
                </div>

                <div className="inputBox">
                    <span>Kutya kora</span>
                    <input type="text" name="dog_age" onChange={e => setDogAge(e.target.value)} />
                    {error && dogAge.length <= 0 ?
                        <span>A kutya korát nem hagyhatja üresen!</span> : ""}
                </div>


                <div className="inputBox">
                    <span>Üzenet</span>
                    <textarea name="message" />
                </div>

                <div className="inputBox">
                    <input type="submit" value="Elküld" />
                </div>
            </form>


            <button onClick={closeModal}>Mégsem</button>
        </div>
    )
}

export default EventModal

{/* < img src = { url } />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{time}</p>
            <button>Feliratkozás</button>
            <button onClick={closeModal}>Mégsem</button> */}