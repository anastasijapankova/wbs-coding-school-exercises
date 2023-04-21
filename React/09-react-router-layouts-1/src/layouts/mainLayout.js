import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer"

export function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}