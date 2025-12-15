import { render, screen } from "@testing-library/react";
import NewsletterCard from "../NewsletterCard";
import { Newsletter, User } from "@/types";

jest.mock("next/image", () => {
  return function MockImage({ src, alt }: any) {
    return <img src={src} alt={alt} data-testid="newsletter-image" />;
  };
});

describe("NewsletterCard", () => {
  const mockNewsletter: Newsletter = {
    id: "1",
    title: "Test Newsletter",
    description: "Test description",
    site: "Les Echos",
    subscriptions: ["premium"],
    image: "test.jpg",
  };

  const freeUser: User = {
    id: "1",
    name: "Free User",
    subscriptions: [],
  };

  const premiumUser: User = {
    id: "2",
    name: "Premium User",
    subscriptions: ["premium"],
  };

  it("should render newsletter title and description", () => {
    render(<NewsletterCard newsletter={mockNewsletter} user={freeUser} />);

    expect(screen.getByText("Test Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it('should show "S\'abonner" button for users without access', () => {
    render(<NewsletterCard newsletter={mockNewsletter} user={freeUser} />);

    expect(screen.getByText("S'abonner")).toBeInTheDocument();
  });

  it('should show "S\'inscrire" button for users with access', () => {
    render(<NewsletterCard newsletter={mockNewsletter} user={premiumUser} />);

    expect(screen.getByText("S'inscrire")).toBeInTheDocument();
  });
});
