import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const mockSales = [
    {
        id: "s001",
        timestamp: "2025-05-07T21:00:00Z",
        items: [
            { name: "Beer", quantity: 2, price: 5.0 },
            { name: "Gin & Tonic", quantity: 1, price: 6.5 },
        ],
        totalAmount: 16.5,
        paymentMethod: "cash",
        processedBy: "Alice",
    },
    {
        id: "s002",
        timestamp: "2025-05-07T21:10:00Z",
        items: [{ name: "Whiskey", quantity: 1, price: 7.0 }],
        totalAmount: 7.0,
        paymentMethod: "card",
        processedBy: "Bob",
    },
    {
        id: "s003",
        timestamp: "2025-05-07T21:20:00Z",
        items: [{ name: "Rum & Coke", quantity: 1, price: 6.0 }],
        totalAmount: 6.0,
        paymentMethod: "cash",
        processedBy: "Alice",
    },
    {
        id: "s004",
        timestamp: "2025-05-07T21:30:00Z",
        items: [
            { name: "Whiskey", quantity: 1, price: 7.0 },
            { name: "Rum & Coke", quantity: 1, price: 6.0 },
        ],
        totalAmount: 13.0,
        paymentMethod: "cash",
        processedBy: "Bob",
    },
    {
        id: "s005",
        timestamp: "2025-05-07T21:40:00Z",
        items: [
            { name: "Whiskey", quantity: 1, price: 7.0 },
            { name: "Rum & Coke", quantity: 1, price: 6.0 },
        ],
        totalAmount: 13.0,
        paymentMethod: "card",
        processedBy: "Alice",
    },
    {
        id: "s006",
        timestamp: "2025-05-07T21:50:00Z",
        items: [
            { name: "Whiskey", quantity: 1, price: 7.0 },
            { name: "Rum & Coke", quantity: 1, price: 6.0 },
        ],
        totalAmount: 13.0,
        paymentMethod: "cash",
        processedBy: "Bob",
    },
];

export default function Cashbox() {
    const [sales] = useState(mockSales);

    const totalCash = sales
        .filter((sale) => sale.paymentMethod === "cash")
        .reduce((sum, sale) => sum + sale.totalAmount, 0);

    const totalCard = sales
        .filter((sale) => sale.paymentMethod === "card")
        .reduce((sum, sale) => sum + sale.totalAmount, 0);

    const grandTotal = totalCash + totalCard;

    return (
        <div className="p-4 space-y-4 mt-2">
            <h1 className="text-xl font-bold">Recuento de caja</h1>

            <Card>
                <CardContent className="p-4 space-y-4">
                    <h2 className="font-bold">TOTALES</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Pagos en efectivo:</span>
                            <span>€{totalCash.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pagos con tarjeta:</span>
                            <span>€{totalCard.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold">
                            <span>Ingresos totales:</span>
                            <span>€{grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
