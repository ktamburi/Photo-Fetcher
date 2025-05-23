import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import Home from "./Pages/Home.jsx";

const Router = () =>
    useRoutes([
        {
            path: "/Photo-Fetcher",
            element: <Layout><Home /></Layout>,
        },
    ]);

export default Router;