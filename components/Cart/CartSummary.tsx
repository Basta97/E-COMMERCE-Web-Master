// components/CartSummary.tsx (Updated)
import Image from "next/image";

const CartSummary = () => {
  return (
    // REMOVED: flex-2 mt-10 md:mt-0
    <div>
      <div className="space-y-3">
        {/* Ideally, you would .map() over your cart items here.
          I've made all items follow the same structure.
        */}

        {/* Product 1 */}
        <div className="flex items-center justify-between" key="product-1">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/Tv.png"
                alt="Product"
                width={60}
                height={60}
                className="object-cover rounded-sm border border-graymedium p-1"
              />
              <div className="absolute -top-2 -right-2 bg-graydark text-bggraylight text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </div>
            </div>
            <p className="text-sm font-semibold">
              All Natural Italian-Style Chicken Meatballs
            </p>
          </div>
          <span className="text-sm font-semibold ">$7.25</span>
        </div>

        {/* Product 2 (Fixed Structure) */}
        <div className="flex items-center justify-between" key="product-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/kb.png"
                alt="Product"
                width={60}
                height={60}
                className="object-cover rounded-sm border border-graymedium p-1"
              />
              {/* Example: This item has quantity 2 */}
              <div className="absolute -top-2 -right-2 bg-graydark text-bggraylight text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </div>
            </div>
            <p className="text-sm font-semibold">Coca-Cola 2L Bottle</p>
          </div>
          <span className="text-sm font-semibold">$3.65</span>
        </div>

        {/* Product 3 (Fixed Structure) */}
        <div className="flex items-center justify-between" key="product-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/la.png"
                alt="Product"
                width={60}
                height={60}
                className="object-cover rounded-sm border border-graymedium p-1"
              />
              <div className="absolute -top-2 -right-2 bg-graydark text-bggraylight text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </div>
            </div>
            <p className="text-sm font-semibold">
              Fairlife Lactose-Free 2% Milk
            </p>
          </div>
          <span className="text-sm font-semibold">$3.69</span>
        </div>
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 text-sm space-y-2">
        <div className="flex justify-between text-sm font-semibold">
          <span>Subtotal | 3 items</span>
          <span>$14.79</span>
        </div>
        <div className="flex justify-between text-sm font-semibold">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-3">
          <span>Total</span>
          <span>$14.79</span>
        </div>
      </div>
      <span className="text-sm text-graydark">Including $2.46 in taxes</span>
    </div>
  );
};

export default CartSummary;