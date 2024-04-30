"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import SubmitButton from "./ui/SubmitButton";
import toast from "react-hot-toast";

type AppointmentForm = {
  form: {
    header: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
};

const AppointmentForm = ({ form }: AppointmentForm) => {
  const [phone, setPhone] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const i = localStorage.getItem("theme") || "dark";
    setTheme(i);
    console.log(theme);
  }, [theme]);

  // Correct onChange handler using event object
  const handlePhoneChange = (formattedValue: string) => {
    setPhone(formattedValue);
    console.log(formattedValue);
  };

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name")?.toString();
    if (!name || name == "") {
      toast.error("No Name was added!");
      return;
    }

    const phoneValidated = phone.replace(/\D/g, "");
    console.log(phoneValidated);
    if (phoneValidated.length < 9) {
      toast.error("Please provide a valid phone number!");
      return;
    }

    const email = formData.get("email")?.toString();

    if (!email || email == "") {
      toast.error("No Email was added!");
      return;
    }

    const message = formData.get("message")?.toString();

    if (!message || message == "") {
      toast.error("No Message was added!");
      return;
    }

    toast.success("Sended Successfully");
  };
  return (
    <div className="text-secondary-foreground flex-1 ">
      <Card className="h-full space-y-16">
        <CardHeader>
          <CardTitle className="text-primary bg-primary/35 text-xl w-fit">
            PROF. DR. YAŞAR ÇOLAK
          </CardTitle>

          <h1 className="text-3xl ">{form.header}</h1>

          <CardDescription className="text-lg text-secondary-foreground/70">
            {form.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <form
            action={handleSubmit}
            className="w-full flex flex-col justify-start gap-6"
          >
            <div className="flex-1">
              <Input
                type="text"
                name="name"
                placeholder={form.name}
                required
                className="w-full"
              />
            </div>
            <div className="flex-1 flex gap-3 flex-col sm:flex-row">
              <PhoneInput
                value={phone}
                placeholder={form.phone}
                onChange={handlePhoneChange}
                country={"tr"}
                containerClass="h-auto" // Set the height dynamically
                inputStyle={{
                  flex: 1,
                  width: "100%",
                  height: "40px",
                  background: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                }}
                containerStyle={{ background: "var(--secondary)" }}
                dropdownStyle={{
                  background: theme == "dark" ? "black" : "white",
                  color: theme == "dark" ? "white" : "black",
                  opacity: 1,
                }}
              />
              <Input
                type="email"
                name="email"
                placeholder={form.email}
                required
              />
            </div>
            <div className="flex-1">
              <Textarea
                className="w-full"
                name="message"
                placeholder={form.message}
              />
            </div>
            <SubmitButton message={form.message} />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentForm;
