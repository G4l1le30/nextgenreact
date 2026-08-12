import { render, screen } from "@testing-library/react";
import ActivityGrid, { type ActivityItem } from "@/components/ActivityGrid";

const item = (i: number): ActivityItem => ({
  _id: `a${i}`,
  title: `Kegiatan ${i}`,
  description: "desc",
  images: [],
});

test("renders all activities", () => {
  render(<ActivityGrid activities={[item(1), item(2), item(3)]} />);
  expect(screen.getByText("Kegiatan 1")).toBeInTheDocument();
  expect(screen.getByText("Kegiatan 3")).toBeInTheDocument();
});