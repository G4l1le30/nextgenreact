import { render, screen, fireEvent } from "@testing-library/react";
import ActivityMasonry from "@/components/ActivityMasonry";
import type { ActivityItem } from "@/components/ActivityGrid";

const item = (i: number): ActivityItem => ({
  _id: `a${i}`,
  title: `Kegiatan ${i}`,
  description: `Deskripsi ${i}`,
  images: [],
});

test("opening one item closes the previously open one", () => {
  render(<ActivityMasonry activities={[item(1), item(2)]} />);

  expect(screen.queryByText("Deskripsi 1")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /kegiatan 1/i }));
  expect(screen.getByText("Deskripsi 1")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /kegiatan 2/i }));
  expect(screen.queryByText("Deskripsi 1")).not.toBeInTheDocument();
  expect(screen.getByText("Deskripsi 2")).toBeInTheDocument();
});

test("clicking the same item again closes it", () => {
  render(<ActivityMasonry activities={[item(1)]} />);

  const btn = screen.getByRole("button", { name: /kegiatan 1/i });
  fireEvent.click(btn);
  expect(screen.getByText("Deskripsi 1")).toBeInTheDocument();

  fireEvent.click(btn);
  expect(screen.queryByText("Deskripsi 1")).not.toBeInTheDocument();
});