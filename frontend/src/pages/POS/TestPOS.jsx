import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Input } from "../../components/ui/input";

const mockProducts = [
    { id: "1", name: "Beer", price: 5.0 },
    { id: "2", name: "Gin & Tonic", price: 6.5 },
    { id: "3", name: "Whiskey", price: 7.0 },
    { id: "4", name: "Rum & Coke", price: 6.0 },
];

export default function POSScreen() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handlePayment = (method) => {
        // Here you would POST to /api/sales
        alert(`Paid ${total.toFixed(2)} EUR by ${method}`);
        setCart([]);
    };

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-xl font-bold">Bar POS</h1>

            <ScrollArea className="flex flex-wrap gap-2 max-h-48">
                {mockProducts.map((product) => (
                    <Button
                        key={product.id}
                        onClick={() => addToCart(product)}
                        className="w-[48%] h-16 text-lg"
                    >
                        {product.name} (€{product.price})
                    </Button>
                ))}
            </ScrollArea>

            <Card>
                <CardContent className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold">Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-muted-foreground">No items yet.</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex justify-between">
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>
                                    €{(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))
                    )}
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <Button
                            className="w-full"
                            onClick={() => handlePayment("cash")}
                        >
                            Cash
                        </Button>
                        <Button
                            className="w-full"
                            onClick={() => handlePayment("card")}
                        >
                            Card
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
