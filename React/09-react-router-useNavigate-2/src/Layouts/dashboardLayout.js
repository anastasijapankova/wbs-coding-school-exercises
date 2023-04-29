import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation";

export function DashboardLayout() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}