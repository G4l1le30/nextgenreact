import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

test("renders NexGen navbar brand", () => {
  render(<Navbar />);
  expect(screen.getByText("NexGen")).toBeInTheDocument();
});

test("renders nav links", () => {
  render(<Navbar />);
  expect(screen.getAllByText("About Us").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Our Activity").length).toBeGreaterThan(0);
});