import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await res.json();
      const resData =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(resData);
      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (err) {}
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>{" "}
        <button
          className="top-res-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restuarants
        </button>
      </div>

      <div className="card-container">
        {listOfRestaurants?.map((restaurant, index) => (
          <RestroCard key={index} data={restaurant} />
        ))}
      </div>
    </>
  );
};
export default Body;
