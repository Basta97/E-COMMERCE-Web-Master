import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* FIX 1: Added `mx-auto` to center the container.
        FIX 2: Added `py-16` (padding-top/bottom) for better vertical spacing.
      */}
      <div className="container mx-auto py-16">
        {/* Section 1: Get In Touch */}
        {/* FIX 3: Removed `mt-12` (now handled by parent) and changed
                 `mb-15` (not a standard class) to `mb-16`.
        */}
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
        {/* FIX 4: Removed `mb-20` (bottom padding is handled by parent's `py-16`).
                 Made padding responsive (`p-8 md:p-12`) and shadow/rounding cleaner.
        */}
        <section className="text-center bg-white shadow-lg p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl text-main mb-4">Send Us</h2>
          <p className="text-main text-sm max-w-2xl mx-auto mb-10">
            Contact us for all your questions and opinions, or you can solve your
            problems in a shorter time with our contact offices.
          </p>

          <form className="max-w-2xl mx-auto text-left space-y-5">
            {/* FIX 5: Replaced clunky flex-wrap with a clean `grid`.
                     This is much more reliable for forms.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm text-main">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full bg-bgsoft p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm text-main">Email</Label>
                <Input
                  type="email"
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
                className="w-full bg-bgsoft p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="block mb-1 text-sm text-main">
                Your message
              </Label>
              <Textarea
                rows={6}
                className="w-full bg-bgsoft border border-grayborder p-2.5 focus:outline-none focus:ring-1 focus:ring-bluemain transition-all duration-200 resize-none"
              ></Textarea>
            </div>

            {/* FIX 6: Used the `size` prop from Shadcn's Button component
                     instead of custom padding classes.
            */}
            <Button
              type="submit"
              size="lg" // Use Shadcn's size prop
              className="bg-primary text-white text-sm cursor-pointer"
            >
              Send message
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;