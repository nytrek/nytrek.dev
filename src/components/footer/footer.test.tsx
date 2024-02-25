import NextLinkMock from "@/utils/mocks/nextLinkMock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Footer } from ".";

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the next/link component
jest.mock("next/link", () => NextLinkMock);

describe("<Footer/>", () => {
  beforeEach(() => {
    /**
     * @description ChatGPT generated snippet
     */
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: "/",
      locale: "en-US",
    }));
    render(<Footer />);
  });

  it("renders without crashing", () => {
    // Verify that the component renders without crashing
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
