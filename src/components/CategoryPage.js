import NavBar from "./NavBar";
import { useState } from "react";

import "./categoryPage.css";

const CategoryPage = ({ categoryData, categoryName }) => {

    const [subCategoryIndex, setSubCategoryIndex] = useState(0);


    const clickHandler = (index) => (event) => {
        event.preventDefault();
        setSubCategoryIndex(index);
    }

    return (
        <div>
            <NavBar />
            <div className="category_box">
                <h1>{categoryName}</h1>
                <div className="subCategory_titles">
                    {
                        categoryData[categoryName].map((data, index) => {
                            return <h2 onClick={clickHandler(index)} key={index}>{data[0]}</h2>
                        })
                    }
                </div>

                <div className="subcategory_box">
                    {categoryData[categoryName][subCategoryIndex][1]}
                </div>

                {/* {Object.keys(categoryData).map((property) => (
                <div key={property}>
                    <h2>{property}</h2>
                    {categoryData[property].map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            ))} */}
            </div>
        </div>
    )
}

export default CategoryPage