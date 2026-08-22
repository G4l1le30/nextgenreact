import { render, screen } from "@testing-library/react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

describe("FloatingWhatsApp", () => {
  test("renders floating button with accessible label and wa.me link", () => {
    render(<FloatingWhatsApp />);
    const link = screen.getByRole("link", { name: /Hubungi NexGen via WhatsApp/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link.getAttribute("href")).toContain("https://wa.me/6281234567890");
  });

  test("renders tooltip text", () => {
    render(<FloatingWhatsApp />);
    expect(screen.getByText("Chat WhatsApp NexGen")).toBeInTheDocument();
  });
});
