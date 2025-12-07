import React from "react";

const ItemList = (props) => {
  const { items: itemCards } = props;

  if (itemCards && itemCards.length === 0) return <div></div>;
  return (
    <div>
      {itemCards.map(
        ({
          card: {
            info: { name, defaultPrice, description, imageId, price, id },
          },
        }) => (
          <div
            key={id}
            className="flex justify-between m-2 border-b-2 border-gray-200"
          >
            <div>
              <h3>
                {name} - ₹ {defaultPrice / 100 || price / 100}
              </h3>
              <p>{description}</p>
            </div>
            <img
              className="w-30 py-2"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ItemList;
