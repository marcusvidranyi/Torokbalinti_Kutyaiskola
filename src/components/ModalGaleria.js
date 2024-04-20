import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

import "./modalGaleria.css";

function ModalGaleria({ galeriaImages, onClose }) {
/* img */
    const [slideNumber, setSlideNumber] = useState(0);
    const [secondOpenModal, setSecondOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setSecondOpenModal(true);

        /* Prevent Scrolling if modal is open */
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }

    };

    const handleCloseModal = (event) => {
        setSecondOpenModal(false);

        /* Unset background scrolling if modal is closed */
        document.body.style.overflow = 'unset';

    };

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galeriaImages.length - 1) : setSlideNumber(slideNumber - 1)
    };
    const nextSlide = () => {
        slideNumber + 1 === galeriaImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    };

    
    const detectKeydown = (event) => {
        switch (event.key) {
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            case "Escape":
                handleCloseModal();
                break;
        };
    };


    useEffect(() => {
        document.addEventListener('keydown', detectKeydown)
        return () => document.removeEventListener('keydown', detectKeydown)

    });

    const detectKeydownModal = (event) => {
        if ((event.key === "Escape") && (!secondOpenModal)) {
            onClose(false);
        };
    };

    useEffect(() => {
        document.addEventListener('keydown', detectKeydownModal)
        return () => document.removeEventListener('keydown', detectKeydownModal)

    }, [secondOpenModal]);


    /* CLOSING MODAL TO OUTSIDE CLICK */

    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    const handleClickOutside = (event) => {
        if ((!refOne.current?.contains(event.target)) &&
            (!refTwo.current?.contains(event.target)) &&
            (!refThree.current?.contains(event.target))) {

            handleCloseModal();
        }

    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [secondOpenModal]);



    /* MOBILE SWIPE FUNCTION */

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (event) => {
        const touchDown = event.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (event) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = event.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            nextSlide();
        }

        if (diff < -5) {
            prevSlide();
        }

        setTouchPosition(null)
    }



    return (
        <>
            {
                secondOpenModal &&
                <div className="sliderWrap">
                    <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal} />
                    <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide} ref={refTwo} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide} ref={refThree} />
                    <div className="fullScreenImage" ref={refOne} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        <img src={galeriaImages[slideNumber].dog_img} alt="SliderImage" />
                        <span className={galeriaImages[slideNumber].text ? "text" : ""} style={{ fontSize: "24px" }}>{galeriaImages[slideNumber].text}</span>
                        <span>{galeriaImages[slideNumber].id} / {galeriaImages.length}</span>
                    </div>
                </div>
            }
            <div className="galleryWrap">
                {
                    galeriaImages && galeriaImages.map((slide, index) => {
                        return (
                            <div className="gallery_container"
                                key={index}
                                onClick={(event) => { handleOpenModal(index) }}
                            >
                                <div className="gallery_item">
                                    <div className="image">
                                        <img
                                            effect="blur"
                                            src={slide.dog_img}
                                            width="100%"
                                            height="100%"
                                            className="actual_images"
                                            alt="dog image"
                                            /* placeholderSrc={placeholderedesm} */
                                        />
                                    </div>
                                    <div /* className={slide.text ? "text" : ""} */ className="modalgalleryText">{slide.text}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ModalGaleria