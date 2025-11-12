"use client";

// components/CheckoutForm.tsx (Updated)
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
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const CheckoutForm = () => {
  const [Contact, setContact] = useState("");
  const [Delivery, setDelivery] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [Apartment, setApartment] = useState("");
  const [PostCode, setPostCode] = useState("");
  const [City, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { AccessToken, userId } = useSelector((state: RootState) => state.auth);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!Delivery) {
      setErrorMessage("Please select a country/region.");
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          Contact,
          Delivery,
          FirstName,
          LastName,
          Address,
          Apartment,
          PostCode,
          City,
          paymentMethod,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message || "Order placed successfully");
        setErrorMessage("");
        setContact("");
        setDelivery("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setApartment("");
        setPostCode("");
        setCity("");
        setPaymentMethod("");
      } else {
        setErrorMessage(data.message || "Failed to place order");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message || "Server error, please try again");
      } else {
        setErrorMessage(String(err) || "Server error, please try again");
      }
    }
  };

  return (
    // REMOVED: flex-2 lg:flex-3
    <div className="space-y-6">
      {/* Contact */}
      <form action="" onSubmit={handlePayment}>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <Link
              href="/auth/login"
              className="underline cursor-pointer text-bluemain text-sm"
            >
              log in
            </Link>
          </div>

          <input
            type="text"
            placeholder="Email or mobile phone number"
            value={Contact}
            required
            onChange={(e) => setContact(e.target.value)}
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
          <Select
            value={Delivery}
            onValueChange={(value: string) => setDelivery(value)}
          >
            <SelectTrigger className="w-full mb-3">
              <SelectValue placeholder="Country / Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-graymedium rounded-sm">
                <SelectLabel>Country or Region</SelectLabel>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="EG">Egypt</SelectItem>
                <SelectItem value="SA">Saudi Arabia</SelectItem>
                <SelectItem value="AE">United Arab Emirates</SelectItem>
                <SelectItem value="GB">United Kingdom</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
            <Input
              type="text"
              placeholder="First name"
              value={FirstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="focus:ring-1 focus:ring-bluemain transition-all duration-200"
            />
            <Input
              type="text"
              placeholder="Last name"
              value={LastName}
              required
              onChange={(e) => setLastName(e.target.value)}
              className="focus:ring-1 focus:ring-bluemain transition-all duration-200"
            />
          </div>

          <Input
            type="text"
            placeholder="Address"
            value={Address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className="w-full focus:ring-1 focus:ring-bluemain transition-all duration-200 mb-3"
          />
          <Input
            type="text"
            placeholder="Apartment, suite, etc"
            value={Apartment}
            required
            onChange={(e) => setApartment(e.target.value)}
            className="w-full focus:ring-1 focus:ring-bluemain transition-all duration-200 mb-3"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
            <Input
              type="text"
              placeholder="Postal code"
              required
              value={PostCode}
              onChange={(e) => setPostCode(e.target.value)}
              className=" focus:ring-1 focus:ring-bluemain transition-all duration-200"
            />
            <Input
              type="text"
              placeholder="City"
              value={City}
              required
              onChange={(e) => setCity(e.target.value)}
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

          <PaymentMethods
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          <Button type="submit" className="mt-6 w-full cursor-pointer">
            Pay now
          </Button>
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </div>
      </form>
      <div className=" w-full h-px bg-grayborder mb-3"></div>
      <span className="underline cursor-pointer text-bluemain text-sm">
        Privacy policy
      </span>
    </div>
  );
};

export default CheckoutForm;
