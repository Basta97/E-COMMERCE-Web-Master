"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const ContactPage = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const AccessToken = useSelector((state: RootState) => state.auth.AccessToken);

  const handleMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name,
          Email,
          Phone: phone,
          Message,
          AccessToken,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(
          data.message || "Your message has been received successfully"
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setErrorMessage(data.message || "Error sending message");
      }
    } catch (err: Error | unknown) {
      const message = err instanceof Error ? err.message : "Server Error";
      setErrorMessage(message);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto py-16">
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-2 text-main">Get In Touch</h2>
          <p className="max-w-md mx-auto mb-12 text-sm text-main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat unde quam dolore culpa veritatis inventore, aut commodi eum
            veniam vel.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex flex-col items-center bg-bglight py-10 px-5 rounded-sm">
              <div className="mb-4 text-primary">
                <MapPin size={27} />
              </div>
              <h4 className="mb-1 text-sm text-main">
                102 Street 2714 Donovan
              </h4>
              <p className="text-sm text-main">
                Lorem ipsum dolar site amet discont
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center bg-bglight py-10 px-5 rounded-sm">
              <div className="mb-4 text-primary">
                <Phone size={27} />
              </div>
              <h4 className="mb-1 text-sm text-main">+02 1234 567 88</h4>
              <p className="text-sm text-main">
                Lorem ipsum dolar site amet discont
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-bglight py-10 px-5 rounded-sm">
              <div className="mb-4 text-primary">
                <Mail size={27} />
              </div>
              <h4 className="mb-1 text-sm text-main">info@example.com</h4>
              <p className="text-sm text-main">
                Lorem ipsum dolar site amet discont
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Send Us */}
        <section className="text-center bg-white shadow-lg p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl text-main mb-4">Send Us</h2>
          <p className="text-main text-sm max-w-2xl mx-auto mb-10">
            Contact us for all your questions and opinions, or you can solve
            your problems in a shorter time with our contact offices.
          </p>

          <form
            onSubmit={handleMessage}
            className="max-w-2xl mx-auto text-left space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm text-main">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-bgsoft p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm text-main">Email</Label>
                <Input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-bgsoft p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="block mb-1 text-sm text-main">
                Phone number
              </Label>
              <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-bgsoft p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="block mb-1 text-sm text-main">
                Your message
              </Label>
              <Textarea
                rows={6}
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-bgsoft border border-grayborder p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200 resize-none"
              ></Textarea>
            </div>

            <Button
              type="submit"
              size="lg" // Use Shadcn's size prop
              className="bg-primary text-white text-sm cursor-pointer"
            >
              Send message
            </Button>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center">{successMessage}</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
