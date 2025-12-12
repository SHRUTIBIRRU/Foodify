import RestroCard, { WithBadges } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();

  const RestroCardWithBadges = WithBadges(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants"
      );
      const jsonData = await res.json();
      const resData =
        jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log("resData", resData);
      const filteredData = resData.filter((_, index) => index !== 3);
      setListOfRestaurants(filteredData);
      setFilteredRestaurants(filteredData);
    } catch (err) {}
  };
  if (!onlineStatus)
    return <h1>Looks like you're offline. Please connect after sometime!</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex mx-4 mt-30 gap-3">
        <div className="flex m-2 gap-2">
          <input
            data-testid="searchInput"
            className="p-2 border rounded-lg border-green-300"
            placeholder="Type here..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className=" p-2 bg-green-300 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            data-testid="topRatedResBtn"
            className="p-2 border rounded-lg border-green-300 text-green-500 cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res, index) => res?.info?.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated restuarants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {filteredRestaurants?.map((restaurant, index) =>
          index > 2 ? (
            <RestroCardWithBadges key={index} data={restaurant} />
          ) : (
            <RestroCard key={index} data={restaurant} />
          )
        )}
      </div>
    </>
  );
};
export default Body;
