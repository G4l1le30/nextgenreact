import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

test("renders NexGen navbar brand", () => {
  render(<Navbar />);
  expect(screen.getByText("NexGen")).toBeInTheDocument();
});

test("renders nav links", () => {
  render(<Navbar />);
  expect(screen.getByText("About Us")).toBeInTheDocument();
  expect(screen.getByText("Our Activity")).toBeInTheDocument();
});