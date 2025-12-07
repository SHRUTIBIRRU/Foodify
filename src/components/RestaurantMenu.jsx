import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(0);

  if (resData === null) return <Shimmer />;

  const categories = resData.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      {categories.length > 0 &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItem={showItem === index ? true : false}
            setShowItem={setShowItem}
            handleItemClick={() => setShowItem(index)}
          />
        ))}
    </div>
  );
};
export default RestaurantMenu;
