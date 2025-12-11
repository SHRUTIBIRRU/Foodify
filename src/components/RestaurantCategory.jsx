import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const {
    data: { itemCards, title },
    showItem,
    handleItemClick,
    setShowItem,
  } = props;

  const handleClick = () => {
    if (showItem) {
      setShowItem(null);
    } else {
      handleItemClick();
    }
  };

  return (
    <div className="w-9/12 mx-auto p-4 my-4 drop-shadow-lg bg-gray-100">
      <div
        data-testid="resCategory"
        className="flex justify-between py-2 cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="font-bold">
          {title} ({itemCards?.length})
        </h2>
        <h2 className="font-bold">⬇️</h2>
      </div>

      {showItem && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
