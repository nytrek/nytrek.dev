import NextLinkMock from "@/utils/mocks/nextLinkMock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { About } from ".";

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock the next/link component
jest.mock("next/link", () => NextLinkMock);

describe("<About/>", () => {
  beforeEach(() => {
    /**
     * @description ChatGPT generated snippet
     */
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: "/",
      locale: "en-US",
    }));
    render(<About />);
  });

  it("renders without crashing", () => {
    // Verify that the component renders without crashing
    expect(screen.getByTestId("about")).toBeInTheDocument();
  });
});
