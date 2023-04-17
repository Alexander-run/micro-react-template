import { createBrowserRouter } from "react-router-dom";
import Home from "../views/index";

const routerOptions = {
  basename: window.__POWERED_BY_QIANKUN__ ? "/one-stop-sub-react" : "/",
};

// create router with basename '/app'
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
], routerOptions);

export default router;