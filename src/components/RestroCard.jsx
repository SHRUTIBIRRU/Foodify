import { Link } from "react-router-dom";

const RestroCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, id } =
    props.data.info;

  return (
    <div className="restroCard">
      <Link to={"/restaurants/" + id}>
        <img
          className="restroCard-img"
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
