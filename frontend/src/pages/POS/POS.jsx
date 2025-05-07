import {
    Amphora,
    BadgeEuro,
    Beer,
    CirclePlus,
    CreditCard,
    Martini,
    Wine,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
import { useState } from "react";

const mockProducts = [
    { id: "1", name: "Alhambra Esp.", price: 2.5, icon: <Beer size={24} /> },
    { id: "2", name: "Alhambra Roja", price: 3.0, icon: <Beer size={24} /> },
    { id: "3", name: "Alhambra 1925", price: 3.0, icon: <Beer size={24} /> },
    { id: "4", name: "Gin & Tonic", price: 5.0, icon: <Martini size={24} /> },
    { id: "5", name: "Tinto de verano", price: 4.0, icon: <Wine size={24} /> },
    { id: "6", name: "Sangría", price: 4.0, icon: <Wine size={24} /> },
    { id: "7", name: "Whiskey", price: 7.0, icon: <Amphora size={24} /> },
    { id: "8", name: "Rum & Coke", price: 5.0, icon: <Martini size={24} /> },
];

const POS = () => {
    const [cart, setCart] = useState([]);

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
        <div className="p-4 w-full h-full">
            <div className="w-full">
                <ScrollArea className="h-[300px]">
                    <div className="grid grid-cols-2 gap-4">
                        {mockProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                setCart={setCart}
                            />
                        ))}
                    </div>
                </ScrollArea>

                <div className="flex justify-center items-center mt-4 w-full">
                    <CartCard
                        cart={cart}
                        total={total}
                        handlePayment={handlePayment}
                    />
                </div>
            </div>
        </div>
    );
};
export default POS;

const CartCard = ({ cart, total, handlePayment }) => {
    return (
        <Card className="w-full">
            <CardTitle className="px-4 text-base font-bold">
                Pedido actual
            </CardTitle>
            <CardContent className="px-4 space-y-4">
                <ScrollArea className=" space-y-2">
                    {cart.length === 0 ? (
                        <p className="text-muted-foreground">(...)</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex justify-between py-1">
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>
                                    €{(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))
                    )}
                </ScrollArea>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
            </CardContent>
            <CardFooter className="w-full px-4">
                <div className="flex w-full items-center gap-8">
                    <Button
                        className="flex items-center gap-2 flex-1/2"
                        onClick={() => handlePayment("cash")}
                    >
                        <BadgeEuro /> Cash
                    </Button>
                    <Button
                        className="flex items-center gap-2 flex-1/2"
                        onClick={() => handlePayment("card")}
                    >
                        <CreditCard /> Card
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

const ProductCard = ({ product, setCart }) => {
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
    return (
        <Card className=" -space-y-2">
            <CardHeader>
                <CardTitle className="flex gap-3 items-center text-sm">
                    {product.icon} {product.name}
                </CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="flex justify-between items-center">
                <p className="text-xl font-bold">{product.price}€</p>
                <Button size="icon" onClick={() => addToCart(product)}><CirclePlus /></Button>

            </CardContent>
        </Card>
    );
};
