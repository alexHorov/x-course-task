import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BookPage } from "./BookPage";
import {
  render,
  screen,
  fireEvent,

} from "@testing-library/react";

jest.mock("hooks/useUserInfo", () => ({
  useUserInfo: () => jest.fn().mockReturnValue([]),
}));

jest.mock("hooks/useUserInfo");

describe("Testing how work my counter", () => {


  test("should render a counter with value of 3 after double click id incBtn", () => {
    render(<BookPage />);
    const inputField = screen.getByTestId("counter");
    const incBtn = screen.getByTestId("increment");
    fireEvent.click(incBtn);
    fireEvent.click(incBtn);
    expect(inputField).toHaveValue(3);
  });

  test("should render a counter with value of 37 after click id decBtn", () => {
    render(<BookPage />);
    const inputField = screen.getByTestId("counter");
    const decBtn = screen.getByTestId("decrement");

    fireEvent.change(inputField, { target: { value: 38 } });
    fireEvent.click(decBtn);
    expect(inputField).toHaveValue(37);
  });
});

jest.mock("assets/count-up.svg");
jest.mock("assets/count-down.svg");
jest.mock("assets/imageNotFound.png");

describe("does the total price change when the quantity changes", () => {
  test("price.textContent", async () => {
    const fakeBook = {
      id: 1,
      author: "Vasya",
      price: 20,
      image: "",
      title: "some book",
      description: "some book desk",
    };

    const { container } = render(<BookPage book={fakeBook} />);

    let incBtn = container.querySelector(".count__up");
    const totalPrice = container.querySelector("#sum");
    fireEvent.click(incBtn);
    expect(totalPrice).toHaveTextContent("40");
  });

});

