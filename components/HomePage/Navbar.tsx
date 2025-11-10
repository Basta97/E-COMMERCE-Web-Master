import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      {/****First green line****/}
       <div className="bg-[#35AFA0] w-full">
      <div className="h-9 text-center ">
       
          <p className="parafirst text-white text-xs p-2 ">
            Due to current circumstances, there may be slight delays in order
            processing
          </p>
        </div>
      </div>
      {/********End******************/}

      {/******Second Group Of Nav***********/}
      <div className="container ">
        <div className="nav flex justify-between items-center mt-3 ">
          <div className="">
            <ul>
              <li className="flex justify-center items-center gap-3 text-xs sm:text-[9.5px]">
                <p>About Us</p>
                <p>Compare</p>
                <p>Wishlist</p>
              </li>
            </ul>
          </div>
          <div className="nav2 flex justify-between items-center text-xs pt-[5px]">
            <Image
              src="/icons/Icon.png"
              alt="Secure Icon"
              width={15}
              height={15}
            />
            <div className=" flex gap-2 divide-x divide-gray-400">
              <p className="pr-2.5">
                100% Secure delivery without contacting the courier
              </p>
              <p className="pr-2.5">
                Need help? Call Us:
                <span className="text-[#35AFA0] font-bold"> +0020500 </span>
              </p>

              {/**---Dropdown Languages---***/}
              <DropdownMenu>
                <div className="flex justify-between items-start">
                  <DropdownMenuTrigger>
                    English
                    <IoIosArrowDown className="inline" />
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/********End Of Dropdown Languages********************/}
            </div>
            <div>
              {/**---Dropdown Currency---***/}

              <DropdownMenu >
                <div className="flex justify-between items-start gap-0.5 ml-2.5">
                  <DropdownMenuTrigger>
                    USD
                    <IoIosArrowDown className="inline" />
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                  <DropdownMenuItem>EGP</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/********End Of Dropdown Currency********************/}
            </div>
          </div>
        </div>
      </div>

      {/********End***********/}
      <hr className="border-gray-300 mt-3 mb-3 NavLine" />

      {/**********Third Group Of Nav ***************/}
      <div className="container">
        <div className="navsec flex justify-between items-center ">
          <div className="flex justify-baseline items-center">
            <Image
              src="/images/log1.png"
              width={150}
              height={150}
              alt="logo1"
            />
          </div>
          <div>
            <InputGroup className="INPUT bg-[#F3F4F7]">
              <InputGroupInput
                placeholder="Search for Products, meats, fruits, eggs, etc..."
                style={{ width: "36rem" }}
                className="SearchBTN"
              />
              <InputGroupAddon></InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  {" "}
                  <CiSearch />{" "}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div>
            <ul className="flex justify-between items-center">
              <li className="mr-2">
                <Image
                  src="/icons/profile.png"
                  width={35}
                  height={35}
                  alt="profile image"
                />
              </li>
              <li className="mr-2">$0.00</li>
              <li className="rounded-full h-10 w-10 bg-[#fff1ee] align-center ">
                <div className="">
                  <span className="bg-[#ec462d] absolute ml-8 -mt-[-2.5] w-6 h-6 rounded-full text-white text-center">
                    0
                  </span>
                  <CiShoppingCart
                    size="30px"
                    color="#ec462d"
                    className="mt-[5px] mx-auto relative"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/**********End*****************/}

      {/*************LOGO****************/}
      <div className="mt-[30px]">
        <div className="nav3 container flex justify-between items-center">
          <DropdownMenu >
            <div className="flex justify-between items-start gap-0.5 ml-2.5">
              <DropdownMenuTrigger>
                <div className="flex-col items-center justify-center">
                  <div className="GREENBTN rounded-full bg-[#35AFA0] flex justify-between items-center p-5 gap-3 text-white">
                    <Image
                      src="/icons/burger.png"
                      width={25}
                      height={25}
                      alt="burger menu"
                      className="BURGER"
                    />
                    ALL CATEGORIES
                    <IoIosArrowDown />
                  </div>
                  <p className="bg-[#EDEEF5] rounded-full text-center text-[#71778E] p-1 text-[8px] w-30 mx-auto mt-[-5px] totalProd">
                    TOTAL 50 PRODUCTS
                  </p>
                </div>
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <ul className="p-4">
                  <li className="pb-5">
                    <Image
                      src="/icons/Beverages.png"
                      width={20}
                      height={20}
                      alt="Beverages icon"
                      className="inline mr-3"
                    />
                    Beverages
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/Biscuits.png"
                      width={20}
                      height={20}
                      alt="Biscuits icon"
                      className="inline mr-3"
                    />
                    Biscuits & Snacks
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/bakery.png"
                      width={20}
                      height={20}
                      alt="bakery icon"
                      className="inline mr-3"
                    />
                    Breads & Bakery
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/breakfast.svg"
                      width={20}
                      height={20}
                      alt="breakfast icon"
                      className="inline mr-3"
                    />
                    Breadfast & Dairy
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/Frozanfood.svg"
                      width={20}
                      height={20}
                      alt="Frozanfood icon"
                      className="inline mr-3"
                    />
                    Frozan Foods
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/Fruits&veg.png"
                      width={20}
                      height={20}
                      alt="Fruits and Vegetables icon"
                      className="inline mr-3"
                    />
                    Fruits & Vegetables
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/Grocery.png"
                      width={20}
                      height={20}
                      alt="Grocery and Staples icon"
                      className="inline mr-3"
                    />
                    Grocery & Staples
                  </li>
                  <li className="pb-5">
                    <Image
                      src="/icons/meat.png"
                      width={20}
                      height={20}
                      alt="meat icon"
                      className="inline mr-3"
                    />
                    Meats & Seafood
                  </li>
                </ul>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="NavItem">
            <ul className="NavTHIRD flex justify-between items-center gap-4 font-semibold text-[#3E445A]">
               <DropdownMenu>
                <div className=" flex justify-between items-start gap-0.5 ml-2.5">
                  <DropdownMenuTrigger>
                     HOME
                    <IoIosArrowDown className="inline" />
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent >
                  <DropdownMenuItem>Home1</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <li>SHOP</li>
              <li className="flex items-center">
                <Image
                  src="/icons/meat.png"
                  width={20}
                  height={20}
                  alt="meat icon"
                  className="inline mr-1"
                />
                MEATS & SEAFOOD
              </li>
              <li className="flex items-center">
                <Image
                  src="/icons/bakery.png"
                  width={20}
                  height={20}
                  alt="bakery icon"
                  className="inline mr-1"
                />
                BAKERY
              </li>
              <li className="flex items-center">
                <Image
                  src="/icons/Beverages.png"
                  width={20}
                  height={20}
                  alt="Beverages icon"
                  className="inline mr-1"
                />
                BEVERAGES
              </li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>

      {/************End***********/}

      <hr className="border-gray-300 mt-3 mb-3 NavLine" />
    </>
  );
};

export default Navbar;
