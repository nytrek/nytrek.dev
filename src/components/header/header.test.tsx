import NextLinkMock from "@/utils/mocks/nextLinkMock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Header } from ".";

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the next/link component
jest.mock("next/link", () => NextLinkMock);

describe("<Header/>", () => {
  beforeEach(() => {
    /**
     * @description ChatGPT generated snippet
     */
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: "/",
      locale: "en-US",
    }));
  });

  it("renders without crashing", () => {
    render(<Header />);
    // Verify that the component renders without crashing
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
