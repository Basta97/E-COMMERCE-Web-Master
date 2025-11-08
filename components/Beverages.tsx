import React from "react";
import Image from "next/image";
const Beverages = () => {
  return (
    <>
      <div className="container">
        <div className="bevSEC flex ml-[60px] mt-[30px]">
          <div className="yellow border-t border-b border-l border-[#E4E5EE] p-10 text-center">
            <Image
              src="/images/B1.png"
              height={195}
              width={195}
              alt="product image"
            />
            <p className="font-bold text-center">Beverages</p>
          </div>
          <div className="gridBev grid grid-flow-col grid-rows-2 divide-x divide-[#E4E5EE] divide-y text-center">
            <div className="bev flex items-center p-10 border-t border-l border-[#E4E5EE] ">
              <Image
                src="/images/beverages1.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold text-center mr-7">
                Biscuits& <br /> Snacks
              </p>
            </div>
            <div className="bev flex items-center p-10 border-l ">
              <Image
                src="/images/B2.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold mr-7 pr-2">
                Fruits&
                <br /> Vegetables
              </p>
            </div>
            <div className="bev flex items-center p-10 border-t  border-[#E4E5EE] ">
              <Image
                src="/images/B3.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7 pr-2">
                Breads&
                <br />
                Bakery
              </p>
            </div>
            <div className="bev flex items-center p-10 ">
              <Image
                src="/images/B4.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7 pr-2">
                Grocery&
                <br />
                Staples
              </p>
            </div>

            <div className="bev flex gap-3 items-center p-10 border-t border-[#E4E5EE]">
              <Image
                src="/images/B5.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7 pr-2">
                Breakfast&
                <br />
                Dairy{" "}
              </p>
            </div>
            <div className="bev flex gap-3 items-center p-10  ">
              <Image
                src="/images/B6.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7 pr-2">Household Needs</p>
            </div>
            <div className="bev flex gap-3 items-center p-10 border-t border-[#E4E5EE]">
              <Image
                src="/images/B7.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7 pr-2">Frozen Foods</p>
            </div>
            <div className="bev flex gap-3 items-center p-10 border-b border-r border-[#E4E5EE]">
              <Image
                src="/images/B8.png"
                height={70}
                width={70}
                alt="product image"
              />
              <p className="font-bold  mr-7">
                Meats& <br />
                Seafood
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beverages;
