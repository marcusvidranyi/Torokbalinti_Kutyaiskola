import CategoryPage from "../components/CategoryPage";
import categoryData from "../data/categoryData";

const Sport = () => {
  return (
    <div>
      <CategoryPage
        categoryData={categoryData}
        categoryName={"SZOLGÁLATI"} />
    </div>
  )
}

export default Sport