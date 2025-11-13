
import Image from "next/image";
import "../../app/style/Bestsellers.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
   CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";


async function getBestSellerData(){
  const response = await fetch("https://e-commarce-website-eight.vercel.app/api/v1/product/get-bestseller", {
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }

  })

  if(!response.ok){
    throw new Error("Failed To Fetch Data")
  }
  return response.json()
}

const Bestsellers = async() => {
  const data = await getBestSellerData()
  console.log("Data", data)
  return (
    <div className="container ">
      <div className="myBEST flex gap-8 md:gap-20 justify-between">
        <div>
          <Image
            src="/images/BestSeller.png"
            height={430.13}
            width={270}
            alt="Best Seller Image"
            className="ml-[60px] mt-2"
          />
        </div>
        <div className="">
          <h1 className="font-bold">BEST SELLERS</h1>
          <p className="text-[#9B9BB4]">
            Do not miss the current offers until the end of March
          </p>
          {/***********Carousal***************/}
          <div className="mt-5 mb-5">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full 2xl:max-w-210 xl:max-w-160 lg:max-w-110 md:max-w-85"
            >
              <CarouselContent>
                {data.data.length > 0 && data.data.map((item:any) => (
                  <CarouselItem
                    key={item.productId}
                    className="lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4 md:basis-1/2 "
                  >
                    <div className="p-1">
                      {/*******Cards*************/}
                      <Card className="2xl:w-48 xl:w-48 lg:w-45 md:w-39">
                        <CardContent className="">
                          <div className="aspect-square rounded-md mb-2">
                            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                              <span className="w-10 h-6 text-center p-1 bg-[#35AFA0] text-white absolute left-8 top-8">
                                22%
                              </span>
                              <Image
                                src={item.image}
                                width={1000}
                                height={1000}
                                alt="Product Image"
                                className="relative"
                              />
                            </div>
                          </div>
                          <CardTitle className="text-sm mb-1 h-24">
                           {item.name}
                          </CardTitle>
                          <CardDescription className="text-xs mb-2 line-clamp-2 text-[#00B853]">
                            IN STOCK: {item.totalSold}
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
                            <span className="text-xs text-muted-foreground">
                              1 review
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#D51243]">
                              <span className="line-through mr-2 text-[#C2C2D3] text-xs">
                                $300
                              </span>
                              {item.price}
                            </span>
                          </div>
                          {/*********Quantity***********/}
                          <div className="qty flex flex-col items-start mt-5">
                            <ButtonGroup className=" text-center align-center mr-10">
                              <Button
                                variant="outline"
                                size="sm"
                                style={{
                                  borderTopLeftRadius: "15px",
                                  borderBottomLeftRadius: "15px",
                                }}
                              >
                                -
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                style={{ width: "90px" }}
                                className="qtyzero"
                              >
                                0
                              </Button>
                              <Button
                                variant="outline"
                                size="icon-sm"
                                className="bg-[#FFCD00]"
                                style={{
                                  borderTopRightRadius: "15px",
                                  borderBottomRightRadius: "15px",
                                }}
                              >
                                +
                              </Button>
                            </ButtonGroup>
                          </div>
                        </CardContent>
                      </Card>
                      {/********End******************/}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
             
              <CarouselNext className="BSN right-0"
              />
              <CarouselPrevious className="BSP left-0"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
