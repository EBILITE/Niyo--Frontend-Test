import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LandingPage from "../Pages/LandingPage";
import Gallery from "../components/GallerySection/Gallery";
import { render, screen } from "../testUtil";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("https://api.artic.edu/api/v1/artworks", (req, res, ctx) => {
    console.log("caught request for mocking");
    throw new Error("asdfadf asdfadf");
    return res(ctx.delay(1500), ctx.status(200), ctx.json([{ name: "" }]));
  })
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("search suite check", () => {
  it("Search input working", async () => {
    // searchGallary();
    render(<Gallery />);
    // userEvent.type(screen.getByPlaceholderText(/Search/i));
    expect(screen.getByTestId("gallary__search")).toBeInTheDocument();
  });
});
