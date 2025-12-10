import RestroCard, { WithBadges } from "../components/RestroCard";
import "@testing-library/jest-dom";
import { resData } from "../mocks/mockData";
import { render, screen } from "@testing-library/react";
import UserContext from "../utils/UserContext";
import { BrowserRouter } from "react-router-dom";

it("Should load RestaurantCard", () => {
  render(
    <BrowserRouter>
      <RestroCard data={resData} />
    </BrowserRouter>
  );

  const restaurantName = screen.getByText("Pizza Paradise");
  expect(restaurantName).toBeInTheDocument();
});

it("Should load RestroCardWithBadges", () => {
  const WithLabelHoC = WithBadges(RestroCard);
  render(<BrowserRouter>{<WithLabelHoC data={resData} />}</BrowserRouter>);

  const offerDesscriptionText = screen.getByText(/50% OFF UPTO ₹100/);
  expect(offerDesscriptionText).toBeInTheDocument();
});
