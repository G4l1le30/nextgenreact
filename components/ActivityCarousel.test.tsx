import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ActivityCarousel, { type ActivityItem } from "@/components/ActivityCarousel";

const item = (i: number): ActivityItem => ({
  _id: `a${i}`,
  title: `Kegiatan ${i}`,
  description: "desc",
  images: [],
});

test("renders all activities in the track", () => {
  render(<ActivityCarousel activities={[item(1), item(2), item(3)]} />);
  expect(screen.getByText("Kegiatan 1")).toBeInTheDocument();
  expect(screen.getByText("Kegiatan 3")).toBeInTheDocument();
});

test("scroll arrows scroll the track", async () => {
  render(<ActivityCarousel activities={[item(1), item(2)]} />);
  const track = document.querySelector(".overflow-x-auto") as HTMLElement;

  Object.defineProperty(track, "scrollWidth", {
    configurable: true,
    value: 2000,
  });
  Object.defineProperty(track, "clientWidth", {
    configurable: true,
    value: 500,
  });

  const scrollBy = jest.fn();
  Object.defineProperty(HTMLElement.prototype, "scrollBy", {
    configurable: true,
    writable: true,
    value: scrollBy,
  });
  const scrollLeftSetter = jest.fn();
  Object.defineProperty(track, "scrollLeft", {
    configurable: true,
    get: () => 0,
    set: scrollLeftSetter,
  });

  fireEvent(window, new Event("resize"));

  const prev = screen.getByRole("button", { name: /scroll kiri/i });
  const next = screen.getByRole("button", { name: /scroll kanan/i });

  await waitFor(() => expect(next).toBeEnabled());
  expect(prev).toBeDisabled();

  fireEvent.click(next);
  expect(scrollBy).toHaveBeenCalledWith({ left: 352, behavior: "smooth" });
});
