import NavBar from "../components/NavBar";
import galeriaData from "../data/galeriaData";
import GaleriaCard from "../components/GaleriaCard";
import ImageModal from "../components/ImageModal";
import "./galeria.css";

import { useState, useEffect } from "react";

function Galeria() {

    const [openModal, setOpenModal] = useState(false);
    const [modalKey, setModalKey] = useState(0);

    const clickHandler = (key) => (event) => {
        event.preventDefault();
        setModalKey(key - 1);
        setOpenModal(true);
    }

    const cards = galeriaData.map(item => {
        const key = item.id
        return (
            <div key={key} onClick={clickHandler(key)}>
                <GaleriaCard
                    key={item.id}
                    {...item}
                />
            </div>
        )
    });

    return (
        <>
            <NavBar />
            <div className="galeria_container">
                <div className="product_categry_container">
                    <div className="products" data-aos="fade-up">
                        {cards}
                    </div>
                    <div className="product_modal">
                        <ImageModal
                            open={openModal}
                            onClose={() => { setOpenModal(false) }}
                            title={galeriaData[modalKey].title}
                            propsKey={modalKey}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Galeria;