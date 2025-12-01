const RestroCard = (props) => {
  const { name, cloudinaryImageId, cuisines,costForTwo,  avgRating, sla } = props.data.info;

  return (
    <div className="restroCard">
      <img
        className="restroCard-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>costForTwo</h4>
      <h4>Delivery Time :{sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestroCard;
