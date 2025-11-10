import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const NewProducts = () => {
  return (
    <div className="container">
      <div className="New flex justify-between gap-10">
        <div className="Trend ml-[60px] mt-[30px]">
          <h2 className="font-semibold ">TRENDING SEARCH</h2>
          <ul className="border p-3 mt-4">
            <li className="text-sm font-semibold flex gap-10 items-center mb-8">
              <Image
                src="/images/Trending.png"
                width={70}
                height={62}
                alt="Trending Image"
              />
              <div>
                <p className="text-sm font-semibold">
                  USDA Choice Angus <br /> Beef Stew Meat
                </p>
                <p className="text-[#D51243] mt-3">
                  <span className="text-[#C2C2D3] mr-1">$79.99</span>$49.99
                </p>
              </div>
            </li>
            <li className="text-sm font-semibold flex gap-10 items-center mb-8">
              <Image
                src="/images/Trending.png"
                width={70}
                height={62}
                alt="Trending Image"
              />
              <div>
                <p>
                  USDA Choice Angus <br /> Beef Stew Meat
                </p>
                <p className="text-[#D51243] mt-3">
                  <span className="text-[#C2C2D3] mr-1">$79.99</span>$49.99
                </p>
              </div>
            </li>
            <li className="text-sm font-semibold flex gap-10 items-center mb-8">
              <Image
                src="/images/Trending.png"
                width={70}
                height={62}
                alt="Trending Image"
              />
              <div>
                <p>
                  USDA Choice Angus <br /> Beef Stew Meat
                </p>
                <p className="text-[#D51243] mt-3">
                  <span className="text-[#C2C2D3] mr-1">$79.99</span>$49.99
                </p>
              </div>
            </li>
            <li className="text-sm font-semibold flex gap-10 items-center mb-8">
              <Image
                src="/images/Trending.png"
                width={70}
                height={62}
                alt="Trending Image"
              />
              <div>
                <p>
                  USDA Choice Angus <br /> Beef Stew Meat
                </p>
                <p className="text-[#D51243] mt-3">
                  <span className="text-[#C2C2D3] mr-1">$79.99</span>$49.99
                </p>
              </div>
            </li>
            <li className="text-sm font-semibold flex gap-10 items-center mb-8">
              <Image
                src="/images/Trending.png"
                width={70}
                height={62}
                alt="Trending Image"
              />
              <div>
                <p>
                  USDA Choice Angus <br /> Beef Stew Meat
                </p>
                <p className="text-[#D51243] mt-3">
                  <span className="text-[#C2C2D3] mr-1">$79.99</span>$49.99
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-12">
            <h2 className="font-bold mb-5">CUSTOMER COMMENT</h2>
            <div className="w-[270px] h-[233.3px] bg-[#FFFBEC] p-8">
              <h3 className="font-semibold">The Best Marketplace</h3>
              <p className="text-[#71778E] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className="flex mt-5">
                <Image
                  src="/images/salesManger.PNG"
                  width={50}
                  height={50}
                  alt="sales manger"
                  className="rounded-full mr-3"
                />
                <div>
                  <h6 className="font-bold">Tina Mcdonnell</h6>
                  <p className="text-sm text-[#202435]">Sales Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <h1 className="font-bold">New Products</h1>
            <p className="text-[#9B9BB4]">New products with updated stocks.</p>
            {/***********Carousal***************/}
            <div className=" grid 2xl:grid-cols-4  xl:grid-cols-4 gap-2  md:grid-cols-2 lg:grid-cols-3 grid-rows-2 justify-between items-center
             mt-8 text-center ">
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="" key={index}>
                  <div className="">
                     {/*******Cards*************/}
                      <Card className="2xl:w-48 xl:w-40 lg:w-34 md:w-31 mb-2">
                        <CardContent className="">
                          <div className="aspect-square rounded-md mb-2">
                            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                              
                              <Image
                                src="/images/seller1.png"
                                width={1000}
                                height={1000}
                                alt="Product Image"
                                className="relative"
                              />
                            </div>
                          </div>
                          <CardTitle className="text-sm mb-1">
                            All Natural Italian-Style Chicken Meatballs
                          </CardTitle>
                          <CardDescription className="text-xs mb-2 line-clamp-2 text-[#00B853]">
                            IN STOCK
                          </CardDescription>
                          <div className="flex items-center space-x-1 mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <StarIcon
                                  key={star}
                                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                              <StarIcon className="h-3 w-3 text-gray-300" />
                            </div>
                            <span className="stars text-xs text-muted-foreground">
                              1 review
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#D51243]">
                              <span className="line-through mr-2 text-[#C2C2D3] text-xs">
                                $300
                              </span>
                              $199
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      {/********End******************/}
                  </div>
                </div>
              ))}
           
          </div>
          <div className="Banner flex justify-between mt-5 gap-5">
            <div className="relative">
              <Image
                src="/images/banner.png"
                height={230}
                width={420}
                alt="banner photo"
                className=""
              />
              <div className="pad absolute inset-0 p-10 mr-5">
                <p className="text-[#00B853] text-xs">WEEKEND DISCOUNT 40%</p>
                <h3 className="text-[#3E445A] text-2xl">Legumes & Cereals</h3>
                <p className="text-[#9B9BB4] text-xs">
                  Feed your family the best
                </p>
                <button className="text-white rounded-full bg-[#C2C2D3] p-2 w-24 text-sm mt-8 cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
             <div className="secondBanner relative">
              <Image
                src="/images/egg.png"
                height={230}
                width={420}
                alt="banner photo"
                className=""
              />
              <div className="pad absolute inset-0 p-10 mr-5">
                <p className="text-[#00B853] text-xs">WEEKEND DISCOUNT 40%</p>
                <h3 className="text-[#3E445A] text-2xl">Dairy & Eggs</h3>
                <p className="text-[#9B9BB4] text-xs">
                  A different kind of grocery store
                </p>
                <button className="text-white rounded-full bg-[#C2C2D3] p-2 w-24 text-sm mt-8 cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
