import { createBrowserRouter } from "react-router-dom";
import Home from "../views/index";

const routerOptions = {
  basename: window.__POWERED_BY_QIANKUN__ ? "/rrrrr" : "/",
};

// create router with basename '/app'
const router = createBrowserRouter([
  { path: "/index", element: <Home /> },
], routerOptions);

export default router;