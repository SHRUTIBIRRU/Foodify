import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const jsonData = await data.json();

      const restuarantData =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      console.log("data", restuarantData);
      setResData(restuarantData);
    } catch (err) {
      console.error("Error:", err?.message);
      // Handle error state in your UI
    }
  };
  if (resData === null) return <Shimmer />;
  console.log("resData", resData);
  return (
    <div>
      {resData.length > 0 &&
        resData[1]?.card?.card?.itemCards.map(
          ({
            card: {
              info: { id, name, imageId, price, defaultPrice, description },
            },
          }) => (
            <div key={id}>
              <h1>{name}</h1>
              <img
                className="restroCard-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
              />

              <h3>Rs {price / 100 || defaultPrice / 100}</h3>

              <p>{description}</p>
            </div>
          )
        )}
    </div>
  );
};
export default RestaurantMenu;
