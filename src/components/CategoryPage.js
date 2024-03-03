import NavBar from "./NavBar";
import { useState } from "react";
import dog_category_example_1 from "../images/dog_category_example_1.jpg";

import "./categoryPage.css";

const CategoryPage = ({ categoryData, categoryName }) => {

    const [subCategoryIndex, setSubCategoryIndex] = useState(0);

    const subCategoryName = categoryData[categoryName][subCategoryIndex][0];
    const subCategoryDescription = categoryData[categoryName][subCategoryIndex][1];
    const subCategoryPicture = categoryData[categoryName][subCategoryIndex][2];

    const clickHandler = (index) => (event) => {
        event.preventDefault();
        setSubCategoryIndex(index);

    };

    return (
        <div>
            <NavBar />
            <div className="category_box_container">
                <div className="category_box">
                    <h1>{categoryName}</h1>
                    <div className="subCategory_titles">
                        {
                            categoryData[categoryName].map((data, index) => {
                                return <h2 onClick={clickHandler(index)} key={index}>{data[0]}</h2>
                            })
                        }
                        <div className={`animation start_${subCategoryName}`}></div>
                    </div>
                    <div className="subCategory_image_box">
                        <img src={Object.values(subCategoryPicture)} />
                    </div>
                    <div className="subcategory_box">
                        {subCategoryDescription}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoryPage