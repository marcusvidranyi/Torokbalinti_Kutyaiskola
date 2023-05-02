import CategoryPage from "../components/CategoryPage";
import categoryData from "../data/categoryData";

const Sport = () => {
  return (
    <div>
      <CategoryPage
        categoryData={categoryData}
        categoryName={"SPORT"} />
    </div>
  )
}

export default Sport