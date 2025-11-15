import React from "react";
import Image from "next/image";

const Hotproducts = () => {
  return (
    <div className="container">
      <div className="HotProd flex justify-between gap-8 ">
        <div>
          <div className="bgImage">
            <div className="p-5 mt-5">
              <p className="text-[#71778E] mb-1">Best bakery products</p>
              <h3 className="text-2xl mb-1">Freshest products</h3>
              <h2 className="font-extrabold text-2xl mb-1">every hour.</h2>
              <p className="text-xs mb-1">only-from</p>
              <p className="text-3xl mb-1 text-[#D51243] font-extrabold">
                $14.99
              </p>
              <button className="text-white rounded-full bg-[#35AFA0] p-1 w-24 cursor-pointer">
                shop now
              </button>
            </div>
          </div>
          <ul className="border ml-[60px] mt-[30px]">
            <li className="flex justify-start gap-4 items-center p-3">
                <Image src="/icons/BaclonApp.png" height={28} width={18.42} alt="App Image"/>Download the Bacola App to <br/>your Phone.
            </li>
             <hr className="border-gray-300 mt-3 mb-3"/>
             <li className="flex justify-start gap-4 items-center p-3">
                <Image src="/icons/BaclonApp.png" height={28} width={18.42} alt="product image"/>Download the Bacola App to <br/>your Phone.
            </li>
             <hr className="border-gray-300 mt-3 mb-3"/>
              <li className="flex justify-start gap-4 items-center p-3">
                <Image src="/icons/BaclonApp.png" height={28} width={18.42} alt="product image"/>Download the Bacola App to <br/>your Phone.
            </li>
             
          </ul>
        </div>
        <div className="mt-5">
          <div className="takecare">
            <Image
              src="/images/Takecare.png"
              width={840}
              height={126}
             
              alt="Takecare Image"
            />
            <div className="mt-20">
              <h1 className="font-bold">HOT PRODUCT FOR THIS WEEK</h1>
              <p className="text-[#9B9BB4]">
                Don't miss this opportunity at a special discount just for this
                week.
              </p>
            </div>
            <div className="yoghrut w-[850px] h-[265.69px] mt-4 rounded-sm flex items-start gap-10 border border-[#ED174A] p-10">
              <Image
                src="/images/HotProductOffer.png"
                width={140}
                height={125.18}
                alt="offer image"
              />
              <div className="details  md:flex-col ">
                <span className="text-[#D51243]">
                  <span className="line-through text-[#C2C2D3] mr-2">
                    $5.49
                  </span>
                  $4.49
                </span>
                <h2>Chobani Complete Vanilla Greek Yogurt</h2>
                <p className="text-[#00B853] text-xs mt-3 mb-3">INSTOCK</p>
                <Image
                  src="/images/slider.png"
                  width={568}
                  height={10}
                  alt="slider image"
                  className="slider"
                />
                <ul className="flex md:flex-row mt-5">
                  <li className="bg-[#EDEEF5] w-8 h-8 text-center pt-1">70</li>
                  <span className="mx-1">:</span>
                  <li className="bg-[#EDEEF5] w-8 h-8 text-center pt-1">14</li>
                  <span className="mx-1">:</span>
                  <li className="bg-[#EDEEF5] w-8 h-8 text-center pt-1">44</li>
                  <span className="mx-1">:</span>
                  <li className="bg-[#EDEEF5] w-8 h-8 text-center pt-1">54</li>
                  <div className="timing text-xs ml-2">
                    Remains until the end <br /> of the offer
                  </div>
                </ul>
              </div>
              
            </div>
          </div>
           <div className="yoghrut mt-5 w-[850px] h-[74px] bg-[#FFEEF2] text-center flex items-center gap-3 justify-center">
                  <p className="text-[#ED174A] p1">Super discount for your <span className="font-bold text-[#ED174A] border-b border-[#ED174A]">first purchase.</span></p>
                  <p className="text-[#ED174A] outline-dashed rounded-full outline-[#ED174A] px-3 py-1 p2">FREE25BAC</p>
                  <p className="text-[#9B9BB4] p3 ">Use discount code in checkout!</p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hotproducts;
