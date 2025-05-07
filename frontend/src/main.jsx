import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Transactions from "./pages/Dashboard/Transactions.jsx";
import MobileLayout from "./layouts/MobileLayout.jsx";
import POS from "./pages/POS/POS.jsx";
import Cashbox from "./pages/Dashboard/Cashbox.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MobileLayout />}>
                    <Route index element={<POS />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="cashbox" element={<Cashbox />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
