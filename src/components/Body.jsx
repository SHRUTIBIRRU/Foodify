import RestroCard, { WithBadges } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";

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
      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (err) {}
  };
  if (!onlineStatus)
    return <h1>Looks like you're offline. Please connect after sometime!</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex m-4 gap-3">
        <input
          className="p-2 border rounded-lg border-green-300"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" p-2 bg-green-300 rounded-lg cursor-pointer"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>{" "}
        <button
          className="p-2 border rounded-lg border-green-300 text-green-500 cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated restuarants
        </button>
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
