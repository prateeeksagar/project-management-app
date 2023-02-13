import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";

import ProjectDetail from "./Pages/ProjectDetail";

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
        path: "/projectdetails",
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: "/projectdetails",
    element: <ProjectDetail />,
  },
]);

export default App;
