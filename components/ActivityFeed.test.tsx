import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ActivityFeed from "@/components/ActivityFeed";
import type { ActivityItem } from "@/components/ActivityList";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      initial,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileInView,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      viewport,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      transition,
      ...rest
    }: Record<string, unknown>) => <div {...rest} />,
  },
}));

jest.mock("@/lib/sanity", () => ({
  getActivitiesPage: jest.fn(),
  toItem: (a: unknown) => a,
}));

import { getActivitiesPage } from "@/lib/sanity";

const item = (i: number): ActivityItem => ({
  _id: `a${i}`,
  title: `Kegiatan ${i}`,
  description: "desc",
  images: [],
});

const mockGet = getActivitiesPage as jest.Mock;

beforeEach(() => {
  mockGet.mockReset();
  mockGet.mockResolvedValue([item(7), item(8)]);
});

test("shows button and appends items on click", async () => {
  
  render(<ActivityFeed initial={[item(1), item(2)]} total={4} />);

  expect(screen.getByText("Kegiatan 1")).toBeInTheDocument();
  expect(screen.queryByText("Kegiatan 7")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /muat lebih/i }));

  await waitFor(() =>
    expect(screen.getByText("Kegiatan 7")).toBeInTheDocument(),
  );
  expect(mockGet).toHaveBeenCalledWith(2);
});

test("hides button when all items loaded", () => {
  render(<ActivityFeed initial={[item(1), item(2)]} total={2} />);
  expect(
    screen.queryByRole("button", { name: /muat lebih/i }),
  ).not.toBeInTheDocument();
});

test("does not duplicate items by id on reload", async () => {
  
  mockGet.mockResolvedValueOnce([item(2), item(3)]);
  render(<ActivityFeed initial={[item(1), item(2)]} total={3} />);

  fireEvent.click(screen.getByRole("button", { name: /muat lebih/i }));

  await waitFor(() =>
    expect(screen.getByText("Kegiatan 3")).toBeInTheDocument(),
  );
  expect(screen.getAllByText("Kegiatan 2")).toHaveLength(1);
});
