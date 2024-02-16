import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./components/Products.jsx";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            // errorElement: <ErrorPage />,
        },
        {
            path: "/products",
            element: <Products />,
        },
        {
            path: '/products/:id',
            element: <Products />,
        },
        {
            path: "/aboutUs",
            element: <App />,
        },

    ]);

    return <RouterProvider router={router} />;
};

export default Router;