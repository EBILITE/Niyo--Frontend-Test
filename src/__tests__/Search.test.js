import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LandingPage from "../Pages/LandingPage";
import Gallery from "../components/GallerySection/Gallery";

// test("is button working", () => {
//   render(
//     <Router>
//       <LandingPage />
//     </Router>
//   );
//   expect(screen.getByRole("button", { name: /Explore More/i }));
// });

test("Search inpute working", () => {
  render(
    
      <Gallery />
    
  );
  userEvent.type(screen.getByPlaceholderText(/Search/i));
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
