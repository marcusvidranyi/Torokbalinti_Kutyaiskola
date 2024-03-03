import NavBar from "./NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import dog_category_example_1 from "../images/dog_category_example_1.jpg";

import "./categoryPage.css";

const CategoryPage = ({ categoryData, categoryName }) => {

    const [subCategoryIndex, setSubCategoryIndex] = useState(0);
    const [clickedElement, setClickedElement] = useState([]);
    const [isFirstElementActive, setisFirstElementActive] = useState(true);

    const subCategoryName = categoryData[categoryName][subCategoryIndex][0];
    const subCategoryDescription = categoryData[categoryName][subCategoryIndex][1];
    const subCategoryPicture = categoryData[categoryName][subCategoryIndex][2];

    const clickHandler = (index) => (event) => {
        event.preventDefault();
        setSubCategoryIndex(index);

        if (clickedElement === index) {
            setClickedElement(null);
        } else {
            setClickedElement(index);
        }

        setisFirstElementActive(false);
    };

    return (
        <div>
            <NavBar />
            <div className="category_box_container">
                <div className="category_box">
                    <h1>{categoryName}</h1>
                    <div className={`subCategory_titles ${isFirstElementActive && "subCategory_titles_first_selected"}`}>
                        {
                            categoryData[categoryName].map((data, index) => {
                                return <h2 onClick={clickHandler(index)} key={index}
                                style={{
                                    color: clickedElement === index ? '#F5CC00' : "#ffff"
                                }}
                                >{data[0]}</h2>
                            })
                        }
                    </div>
                    <div className="subCategory_image_box">
                        <img src={Object.values(subCategoryPicture)} />
                    </div>
                    <div className="subcategory_box">
                        {subCategoryDescription}
                    </div>
                    <br></br>
                    <Link to="/" className="back-to-menu-link">VISSZA A FŐOLDALRA</Link>
                </div>
            </div>
        </div>
    )
};

export default CategoryPage