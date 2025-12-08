import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  if (items && items.length === 0) return <div></div>;
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between m-2 border-b-2 border-gray-200"
        >
          <div>
            <h3 className="font-semibold">
              {item.card.info.name} - ₹
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h3>
            <p className="pt-1">{item.card.info.description}</p>
          </div>
          <div>
            <button
              className="absolute p-2 bg-black text-white rounded-lg cursor-pointer"
              onClick={() => handleAdd(item)}
            >
              Add +
            </button>
            <img
              className="w-30 py-2"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
