import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation";
import '../App.css'

export function MainLayout() {
    return (
        <div className="index">
            <Navigation />
            <Outlet />
        </div>
    )
}