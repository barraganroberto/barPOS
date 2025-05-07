import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";

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

function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
}

export default function Transactions() {
    const [sales] = useState(mockSales);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Transacciones</h1>
            <ScrollArea className="space-y-4 h-[80vh]">
                {sales.map((sale) => (
                    <Card key={sale.id} className="my-4">
                        <CardContent className="px-4 space-y-2">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>{formatDateTime(sale.timestamp)}</span>
                                By {sale.processedBy}
                            </div>
                            <div className="space-y-1">
                                {sale.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between text-sm"
                                    >
                                        <span>
                                            {item.name} x {item.quantity}
                                        </span>
                                        <span>
                                            €
                                            {(
                                                item.price * item.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between font-bold pt-2">
                                <span>Total</span>
                                <span>€{sale.totalAmount.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-right text-muted-foreground">
                                <span>{sale.paymentMethod.toUpperCase()}</span>
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </ScrollArea>
        </div>
    );
}
