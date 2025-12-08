import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const jsonData = await data.json();
      setResInfo(jsonData);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
