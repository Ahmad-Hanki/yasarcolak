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

  useEffect(()=> {
    const i = localStorage.getItem('theme') || 'dark';
    setTheme(i);
    console.log(theme)
  },[theme])

  // Correct onChange handler using event object
  const handlePhoneChange = (
    formattedValue: string
  ) => {
    setPhone(formattedValue);
    console.log(formattedValue);
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
          <form className="w-full flex flex-col justify-start gap-6">
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
                inputStyle={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  background: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                }}
                containerStyle={{ background: "var(--secondary)" }}
                dropdownStyle={{ background: theme=='dark'? 'black': 'white', color: theme=='dark'? 'white': 'black' ,opacity: 1}}
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
            <Button>submir</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentForm;
