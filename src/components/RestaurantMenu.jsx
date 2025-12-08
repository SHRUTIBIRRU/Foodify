import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(0);

  if (resData === null) return <Shimmer />;

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //name costForTwo
  const { name, costForTwo } = resData?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div className="flex justify-center p-4">
        <h2 className="font-bold text-2xl">
          {name} - {costForTwo}
        </h2>
      </div>

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
