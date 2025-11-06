import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { PaymentMethods } from "./PaymentMethods";
import { Button } from "../ui/button";

const CheckoutForm = () => {
  return (
    <div className="space-y-6 flex-2 lg:flex-3 ">
      {/* Contact */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <Link
            href="/login"
            className="underline cursor-pointer text-bluemain text-sm"
          >
            log in
          </Link>
        </div>

        <input
          type="text"
          placeholder="Email or mobile phone number"
          className="w-full border-2 border-bluemain placeholder:text-graytext rounded-sm p-2.5 mb-3
                            text-sm focus:outline-none"
        />
        <label className="flex items-center space-x-2 text-sm ml-1">
          <Checkbox />
          <span className="">Email me with news and offers</span>
        </label>
      </div>

      {/* Delivery */}
      <div>
        <h2 className="text-xl font-bold mb-4">Delivery</h2>
        <Select>
          <SelectTrigger className="w-full mb-3">
            <SelectValue placeholder="Country / Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Country or Region</SelectLabel>
              <SelectItem value="apple">United States</SelectItem>
              <SelectItem value="banana">Egypt</SelectItem>
              <SelectItem value="blueberry">Saudi Arabia</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
          <Input
            type="text"
            placeholder="First name (optional)"
            className="focus:ring-1 focus:ring-bluemain transition-all duration-200"
          />
          <Input
            type="text"
            placeholder="Last name"
            className="focus:ring-1 focus:ring-bluemain transition-all duration-200"
          />
        </div>

        <Input
          type="text"
          placeholder="Address"
          className="w-full focus:ring-1 focus:ring-bluemain transition-all duration-200 mb-3"
        />
        <Input
          type="text"
          placeholder="Apartment, suite, etc (optional)"
          className="w-full focus:ring-1 focus:ring-bluemain transition-all duration-200 mb-3"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
          <Input
            type="text"
            placeholder="Postal code (optional)"
            className=" focus:ring-1 focus:ring-bluemain transition-all duration-200"
          />
          <Input
            type="text"
            placeholder="City"
            className=" focus:ring-1 focus:ring-bluemain transition-all duration-200"
          />
        </div>

        <label className="flex items-center space-x-2 text-sm ml-1">
          <Checkbox />
          <span>Save this information for next time</span>
        </label>
      </div>

      {/* Shipping Method */}
      <div>
        <h2 className="text-md font-bold mb-4">Shipping method</h2>
        <div className="flex justify-between border-2 border-bluemain bg-bgbluelight text-sm rounded-sm p-3.5">
          <span>Standard</span>
          <span className="font-bold">FREE</span>
        </div>
      </div>

      {/* Payment */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-1.5">Payment</h2>
        <p className="text-sm text-graytext mb-4">
          All transactions are secure and encrypted.
        </p>
        {/* <div className="bg-bggraylight text-graytext flex flex-col items-center gap-3 rounded-md p-6 text-center">
                            <span>
                                <AlertCircle size={35} />
                            </span>
                            <p className=" text-sm">
                                This store can’t accept payments right now.
                            </p>
                        </div> */}

        <PaymentMethods />

        <Button className="mt-6 w-full cursor-pointer">Pay now</Button>
      </div>
      <div className=" w-full h-px bg-grayborder mb-3"></div>
      <span className="underline cursor-pointer text-bluemain text-sm">
        Privacy policy
      </span>
    </div>
  );
};

export default CheckoutForm;
