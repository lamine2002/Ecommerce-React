import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/products",
            element: <App />,
        },
        {
            path: '/products/:id',
            element: <App />,
        },
        {
            path: "/aboutUs",
            element: <App />,
        },

    ]);

    return <RouterProvider router={router} />;
};

export default Router;