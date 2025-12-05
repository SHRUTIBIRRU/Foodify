import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

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
