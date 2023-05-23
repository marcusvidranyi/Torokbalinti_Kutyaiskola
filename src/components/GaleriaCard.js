

function GaleriaCard({coverImg, title}) {
    return (
        <div className="productcard"
            style={{
                backgroundImage:
                    `url(${coverImg})`

            }}>
            {/* <img src={coverImg} className="product_category_images"></img> */}
            <div className="card_content">
                <p className="productcard_title" >{title.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default GaleriaCard