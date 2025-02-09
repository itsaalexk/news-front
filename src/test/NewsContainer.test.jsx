import { render, screen, fireEvent } from "@testing-library/react";

import { ToastContainer } from "react-toastify";
import { NewContainer } from "../components/NewContainer/NewContainer";
import { MemoryRouter } from "react-router";

jest.mock("../components/NewsCard", () => ({
  NewsCard: ({ title, onArchive, onRestore, onDelete }) => (
    <div>
      <h2>{title}</h2>
      <button onClick={onArchive}>Archive</button>
      <button onClick={onRestore}>Restore</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  ),
}));

describe("NewContainer Component", () => {
  const mockData = {
    news: [
      {
        _id: "1",
        title: "News 1",
        description: "Description 1",
        image: "image1.jpg",
        content: "Content 1",
        author: "Author 1",
        date: "2024-02-09",
        archiveDate: "2024-02-10",
        achieved: false,
      },
    ],
    totalPages: 2,
  };

  const mockOnArchive = jest.fn();
  const mockOnRestore = jest.fn();
  const mockOnDelete = jest.fn();
  const mockSetPage = jest.fn();

  test("calls restore function when Restore button is clicked", () => {
    render(
      <MemoryRouter>
        <NewContainer
          pageTitle="Latest News"
          data={mockData}
          onArchive={mockOnArchive}
          onRestore={mockOnRestore}
          onDelete={mockOnDelete}
          setPage={mockSetPage}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /restore/i }));
    expect(mockOnRestore).toHaveBeenCalledWith("1");
  });

  test("calls delete function when Delete button is clicked", () => {
    render(
      <MemoryRouter>
        <NewContainer
          pageTitle="Latest News"
          data={mockData}
          onArchive={mockOnArchive}
          onRestore={mockOnRestore}
          onDelete={mockOnDelete}
          setPage={mockSetPage}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(mockOnDelete).toHaveBeenCalledWith("1");
  });
});
