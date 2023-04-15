import "./contactform.css";

import React, { useRef, useState } from 'react';

const ContactForm = () => {


    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState(false);


    return (
        <>
            <div className="contact_form_box">
                <div className="contact_box_left">
                    <h2 style={{ color: "#FFFF" }}>Küldjön Üzenetet!</h2>
                    <form /* ref={form} onSubmit={sendEmail} */ className="contact_form">
                        <div className="row50">
                            <div className="inputBox">
                                <span>Vezetéknév</span>
                                <input type="text" name="last_name" placeholder="Kovács" /* onChange={e => setLastName(e.target.value)} */ />
                                {/*  {error && lastName.length <= 0 ?
                                        <span>A vezetéknevet nem hagyhatja üresen!</span> : ""} */}
                            </div>
                            <div className="inputBox">
                                <span>Keresztnév</span>
                                <input type="text" name="first_name" placeholder="János" /* onChange={e => setFirstName(e.target.value)}  */ />
                                {/*  {error && firstName.length <= 0 ?
                                        <span>A keresztnevet nem hagyhatja üresen!</span> : ""} */}
                            </div>
                        </div>
                        <div className="row50">
                            <div className="inputBox">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="user_email"
                                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}"
                                    placeholder="Az Ön e-mail címe"
                                /* onChange={e => setUserEmail(e.target.value)} */
                                />
                                {/*   {error && userEmail.length <= 0 ?
                                        <span>Adjon meg egy érvényes E-mail címet!</span> : ""} */}
                            </div>
                            <div className="inputBox">
                                <span>Telefon</span>
                                <input type="tel" name="user_phone" placeholder="Az Ön telefonszáma (opcionális)" />
                            </div>
                        </div>
                        <div className="row100">
                            <div className="inputBox">
                                <span>Üzenet</span>
                                <textarea name="message" placeholder="Az Ön üzenete" />
                            </div>
                        </div>
                        <div className="row100">
                            <div className="inputBox">
                                <input type="submit" value="Elküld" className="contact_form_submitbutton" />
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default ContactForm