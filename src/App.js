import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import MoviesList from "./components/MoviesList";
import { Provider } from "react-redux";
import store from "./utils/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
