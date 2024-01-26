import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";

const routes = [{ path: "/", element: <HomePage /> }];

const router = createBrowserRouter(routes);

export default router;
