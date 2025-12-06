import { Link } from "react-router-dom";

const RestroCard = (props, enableHover = true) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } =
    props.data.info;

  return (
    <div
      className={`flex w-80 bg-gray-100 hover:bg-gray-200 justify-center p-2 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105`}
    >
      <Link to={"/restaurants/" + id}>
        <img
          className="h-50 w-70 rounded-xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4>⭐ {avgRating} stars</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo} </h4>
        <h4>Delivery Time : {sla.deliveryTime} minutes</h4>
      </Link>
    </div>
  );
};

export const WithBadges = (Card) => {
  return (props) => {
    const {
      info: {
        aggregatedDiscountInfoV3: { header, subHeader },
      },
    } = props.data;
    return (
      <div className=" relative transition-transform duration-300 hover:scale-105">
        <h3 className=" absolute text-white font-semibold text-[12px] mt-2 px-2 py-1 bg-black rounded-lg">
          🔥 {header + " " + subHeader}
        </h3>
        <Card {...props} />
      </div>
    );
  };
};

export default RestroCard;
