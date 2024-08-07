import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<RootLayout/>} errorElement={<ErrorHandler/>}>
            <Route index element={<HomePage/>}/>
        </Route>
        {/* Page not found */}
        <Route path="*" element={<PageNotFound/>}/>
        </>
    )
)

export default router