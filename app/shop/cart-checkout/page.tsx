import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CartSummary from "@/components/Cart/CartSummary";

export default function CartCheckout() {
    return (
        <div className="my-20">
            <div className="container flex flex-col md:flex-row gap-10">
                {/* Left Section */}
                <CheckoutForm />

                <div className="hidden md:block w-[0.5px] bg-grayborder"></div>

                {/* Right Section */}
                <CartSummary />
            </div>
        </div>
    );
}
