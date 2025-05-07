import { Beer, Menu, Moon, User2 } from "lucide-react";
const Topbar = () => {
    return (
        <div className="h-full flex items-center justify-between border-b border-gray-200">
            <div className="flex gap-2 mx-4 items-center">
                <Beer />
                <span className="font-bold text-xl">BarPOS</span>
            </div>
            <div className="mx-4 flex items-center gap-4">
                <Moon />
                <User2 />
                <Menu />
            </div>
        </div>
    );
};
export default Topbar;
