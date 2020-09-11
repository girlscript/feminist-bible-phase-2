import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header.jsx";

test("'write a story'' button exists when isSignedIn prop is truthy", () => {
  const { queryByTestId } = render(<Header isSignedIn={true} />);
  expect(queryByTestId("write-a-story")).toBeTruthy();
});

test("'write a story'' button does not exists when isSignedIn prop is falsy", () => {
  const { queryByTestId } = render(<Header isSignedIn={false} />);
  expect(queryByTestId("write-a-story")).toBeNull();
});

test("user avatar exists when isSignedIn prop is truthy", () => {
  const { queryByTestId } = render(<Header isSignedIn={true} avatarSrc="#" />);
  expect(queryByTestId("user-avatar")).toBeTruthy();
});

test("user avatar does not exists when isSignedIn prop is falsy", () => {
  const { queryByTestId } = render(<Header isSignedIn={false} />);
  expect(queryByTestId("user-avatar")).toBeNull();
});
