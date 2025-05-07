import { ArrowLeftRight, Home, WalletCards } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex items-center justify-around border-t border-b border-gray-200">
            <button
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <Home />
                <p className="text-xs font-semibold">Inicio</p>
            </button>
            <button
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => navigate("/transactions")}
            >
                <ArrowLeftRight />
                <p className="text-xs font-semibold">Transacciones</p>
            </button>
            <button
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => navigate("/cashbox")}
            >
                <WalletCards />
                <p className="text-xs font-semibold">Caja</p>
            </button>
        </div>
    );
};
export default Navbar;
