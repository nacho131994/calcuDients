import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//LAYOUTS
import RootLayout from "./layouts/RootLayout";

//PAGES
import Pesto from "./pages/Pesto";
import Hummus from "./pages/Hummus";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="pesto" element={<Pesto />} />
      <Route path="hummus" element={<Hummus />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
