import { Outlet } from "react-router";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";

const MobileLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-12 shrink-0">
                <Topbar />
            </div>
            <div className="flex-1 bg-slate-50">
                <Outlet />
            </div>
            <div className="h-16 shrink-0">
                <Navbar />
            </div>
        </div>
    );
};
export default MobileLayout;
