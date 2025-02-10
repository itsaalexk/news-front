import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useSearchParams } from "react-router";
import { BrowserRouter } from "react-router";
import PaginationComponent from "../components/pagination";
// Mock para useSearchParams
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useSearchParams: jest.fn(),
}));

describe("PaginationComponent", () => {
  let mockSetSearchParams;
  let mockOnPageChange;

  beforeEach(() => {
    // Mock de la función setSearchParams
    mockSetSearchParams = jest.fn();

    // Mock de onPageChange
    mockOnPageChange = jest.fn();

    useSearchParams.mockImplementation(() => [
      new URLSearchParams({ page: "1" }), // Valor predeterminado de la página
      mockSetSearchParams,
    ]);
  });

  test("renders pagination component correctly", () => {
    render(
      <BrowserRouter>
        <PaginationComponent totalPages={3} onPageChange={mockOnPageChange} />
      </BrowserRouter>
    );

    // Verificar que la página actual se muestre correctamente
    expect(screen.getByText("Página actual: 1")).toBeInTheDocument();

    // Verificar que hay 3 botones de página
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("calls onPageChange when a page number is clicked", async () => {
    render(
      <BrowserRouter>
        <PaginationComponent totalPages={3} onPageChange={mockOnPageChange} />
      </BrowserRouter>
    );

    const page2Button = screen.getByText(2);
    fireEvent.click(page2Button);

    await waitFor(() => {
      expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ page: 2 });
  });

  test("calls onPageChange when next button is clicked", async () => {
    render(
      <BrowserRouter>
        <PaginationComponent totalPages={3} onPageChange={mockOnPageChange} />
      </BrowserRouter>
    );

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ page: 2 });
  });

  test("calls onPageChange when previous button is clicked", async () => {
    useSearchParams.mockImplementation(() => [
      new URLSearchParams({ page: 2 }),
      mockSetSearchParams,
    ]);

    render(
      <BrowserRouter>
        <PaginationComponent totalPages={3} onPageChange={mockOnPageChange} />
      </BrowserRouter>
    );

    const prevButton = screen.getByText("Previous");
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ page: 1 });
  });
});
