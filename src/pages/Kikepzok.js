import "./kikepzok.css"

import NavBar from "../components/NavBar";
import dog_category_example_1 from "../images/dog_category_example_1.jpg";
import dog_category_example_2 from "../images/dog_category_example_2.jpg";
import dog_category_example_3 from "../images/dog_category_example_3.jpg";
import dog_screenshot_3 from "../images/dog_screenshot_3.jpg";

const Kikepzok = () => {
    return (
        <>
            <NavBar />
            <div className="kikepzok_box">
                <h1>KIKÉPZŐK</h1>
                <div className="balazs_box clearfix">
                    <img src={dog_category_example_1} />
                    <h3>Szabó Balázs</h3>
                    <p>Pellentesque placerat tellus eu sapien maximus egestas. Vestibulum convallis lacinia neque, eu ultricies mi rutrum et. Mauris quis mauris ut est condimentum semper at vitae augue. Vivamus vel iaculis eros. Phasellus vehicula gravida arcu, ac venenatis arcu rutrum sed. Aliquam ullamcorper nisl magna, scelerisque facilisis sem finibus eget. Sed posuere massa et enim dapibus, nec fermentum arcu mattis. Fusce mollis, erat sed ornare consequat, justo erat consectetur dolor, ut dignissim massa felis eu eros. Sed vestibulum scelerisque quam, at eleifend lectus condimentum porta.</p>
                    <div className="balazs_dogs">
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                    </div>
                </div>
                <div className="niki_box">
                    <img src={dog_category_example_2} />
                    <h3>György Nikolett</h3>
                    <p>Pellentesque placerat tellus eu sapien maximus egestas. Vestibulum convallis lacinia neque, eu ultricies mi rutrum et. Mauris quis mauris ut est condimentum semper at vitae augue. Vivamus vel iaculis eros. Phasellus vehicula gravida arcu, ac venenatis arcu rutrum sed. Aliquam ullamcorper nisl magna, scelerisque facilisis sem finibus eget. Sed posuere massa et enim dapibus, nec fermentum arcu mattis. Fusce mollis, erat sed ornare consequat, justo erat consectetur dolor, ut dignissim massa felis eu eros. Sed vestibulum scelerisque quam, at eleifend lectus condimentum porta.</p>
                    <div className="niki_dogs">
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Kikepzok;
