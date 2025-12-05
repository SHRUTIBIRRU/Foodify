import { Link } from "react-router-dom";

const RestroCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } =
    props.data.info;

  return (
    <div className="flex w-60 bg-gray-100 hover:bg-gray-200 justify-center p-2 rounded-xl ">
      <Link to={"/restaurants/" + id}>
        <img
          className="h-50 w-50 rounded-xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo} </h4>
        <h4>Delivery Time :{sla.deliveryTime} min</h4>
      </Link>
    </div>
  );
};
export default RestroCard;
