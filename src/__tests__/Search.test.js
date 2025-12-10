import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Shouls show filtered list when burger is searched", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const restroCardBeforeSearch = screen.getAllByTestId("restroCard");
  expect(restroCardBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const restroCardAfterSearch = screen.getAllByTestId("restroCard");

  expect(restroCardAfterSearch.length).toBe(1);
});

it("Should show top rated restaurants when clicked on btn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRattopRatedResBtn = screen.getByTestId("topRatedResBtn");

  fireEvent.click(topRattopRatedResBtn);

  const restroCards = screen.getAllByTestId("restroCard");

  expect(restroCards.length).toBe(3);
});
