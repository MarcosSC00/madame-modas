import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./Contexts/CartContext";
import { HomePage } from "./pages/HomePage";
import { Home } from "./components/Home/Home";
import { CartPage } from "./pages/CartPage/CartPage";
import { MenPage } from "./pages/MenPage/MenPage";
import { WomenPage } from "./pages/WomenPage/WomenPage";
import { AccessoriesPage } from "./pages/AccesoryPage/AccessoriesPage";
import { SearchContextProvider } from "./Contexts/SearchContext";
import { SearchPage } from "./pages/SearchPage/SearchPage";

export function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            children: [{
                path: '/',
                element: <Home />
            }, {
                path: '/meu-carrinho',
                element: <CartPage />
            },
            {
                path: '/men',
                element: <MenPage />
            },
            {
                path: '/women',
                element: <WomenPage />
            },
            {
                path: '/accessories',
                element: <AccessoriesPage />
            },
            {
                path: '/search-page',
                element: <SearchPage/>
            }
            ]
        },
    ])

    return (
        <CartContextProvider>
            <SearchContextProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </SearchContextProvider>
        </CartContextProvider>
    )
}