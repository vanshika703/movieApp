import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import MoviesList from "./components/MoviesList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MoviesList />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
