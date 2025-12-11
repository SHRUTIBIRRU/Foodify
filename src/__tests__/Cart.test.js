import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "../mocks/resturantMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Cart Flow Testing", () => {
  it("Should load Restaurant Menu component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const recommendedText = screen.getByTestId("restaurantMenu");

    expect(recommendedText).toBeInTheDocument();
  });

  it("Should show foodItem when clicked on Accordion", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    );

    const PizzaHeader = screen.getByText("Specialty Pizzas (2)");

    fireEvent.click(PizzaHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
  });

  it("Should Add Item when clicked on Add btn", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart 1")).toBeInTheDocument();
  });

  it("Should show Added Items on Cart Page", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    //clear the cart
    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartBtn);
    const VeggieHeader = screen.getByText("Specialty Pizzas (2)");

    fireEvent.click(VeggieHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(3);
  });

  it("Should clear the cart when clicked on Clear Cart Btn", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const VeggieHeader = screen.getByText("Specialty Pizzas (2)");

    fireEvent.click(VeggieHeader);
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);
    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartBtn);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(
      screen.getByText(
        "😐 Oops!! No items Added to Cart. Please add Items to the Cart!"
      )
    ).toBeInTheDocument();
  });
});
