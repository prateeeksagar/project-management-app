import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";

// import ProjectDetail from "./Pages/ProjectDetail";
import ProjectDetails from "./Pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    Children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/:id",
    element: <ProjectDetails />,
  },
]);

export default App;
