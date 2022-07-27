import MovieCard from "./MovieCard";
import { getByAltText, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("MovieCard", () => {
  const mockMovie = {
    id: 1,
    title: "Toy Story 2",
    poster: "/vhK51wJybwZTRCPVUOkGpSI4auN.jpg",
    watching: false,
  };

  const mockWatchingMovie = {
    id: 1,
    title: "Toy Story 2",
    poster: "/vhK51wJybwZTRCPVUOkGpSI4auN.jpg",
    watching: true,
  };

  const mockNoImageMovie = {
    id: 1,
    title: "Toy Story 2",
    poster: null,
    watching: true,
  };

  it("should render a non-watching movie correctly", () => {
    render(
      <Router>
        <MovieCard {...mockMovie} />
      </Router>
    );
    expect(screen.getByAltText(mockMovie.title)).toBeInTheDocument();
  });

  it("should render a watching movie correctly", () => {
    render(
      <Router>
        <MovieCard {...mockWatchingMovie} />
      </Router>
    );
    expect(screen.getByText(mockWatchingMovie.title)).toBeInTheDocument();
  });

  it("should render a movie background if there isn't a poster", () => {
    render(
      <Router>
        <MovieCard {...mockNoImageMovie} />
      </Router>
    );
    const noImageBackground = "../noImage.png";
    const image = screen.getByAltText(mockNoImageMovie.title);
    expect(image).toHaveAttribute("src", noImageBackground);
  });
});
