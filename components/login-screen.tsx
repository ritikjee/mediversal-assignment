"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

// Define the schema for email/password login
const emailPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Define the schema for phone number login
const phoneSchema = z.object({
  phone: z
    .string()
    .regex(/^\+91\d{10}$/, { message: "Invalid Indian phone number" }),
});

// Define the schema for OTP
const otpSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits" }),
});

export default function LoginScreen() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [showOTP, setShowOTP] = useState(false);
  const { toast } = useToast();

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
  } = useForm<z.infer<typeof emailPasswordSchema>>({
    resolver: zodResolver(emailPasswordSchema),
  });

  const {
    register: registerPhone,
    handleSubmit: handleSubmitPhone,
    formState: { errors: phoneErrors },
    watch,
  } = useForm<z.infer<typeof phoneSchema>>({
    resolver: zodResolver(phoneSchema),
  });

  const {
    register: registerOTP,
    handleSubmit: handleSubmitOTP,
    formState: { errors: otpErrors },
  } = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
  });

  const phoneNumber = watch("phone");

  const onSubmitEmail = (data: z.infer<typeof emailPasswordSchema>) => {
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Logged in with email: ${data.email}`,
      });
    }, 1000);
  };

  const onSubmitPhone = (data: z.infer<typeof phoneSchema>) => {
    setShowOTP(true);
    toast({
      title: "OTP Sent",
      description: `OTP sent to ${data.phone}`,
    });
  };

  const onSubmitOTP = (data: z.infer<typeof otpSchema>) => {
    // Simulate API call
    console.log(data);
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Logged in with phone: ${phoneNumber}`,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <RadioGroup
          defaultValue="email"
          onValueChange={(value) => setLoginMethod(value as "email" | "phone")}
          className="flex justify-center space-x-4 mb-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
        </RadioGroup>

        {loginMethod === "email" && (
          <form
            onSubmit={handleSubmitEmail(onSubmitEmail)}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...registerEmail("email")} />
              {emailErrors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {emailErrors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...registerEmail("password")}
              />
              {emailErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {emailErrors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        )}

        {loginMethod === "phone" && !showOTP && (
          <form
            onSubmit={handleSubmitPhone(onSubmitPhone)}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91" {...registerPhone("phone")} />
              {phoneErrors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {phoneErrors.phone.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Send OTP
            </Button>
          </form>
        )}

        {loginMethod === "phone" && showOTP && (
          <form onSubmit={handleSubmitOTP(onSubmitOTP)} className="space-y-4">
            <div>
              <Label htmlFor="otp">Enter OTP</Label>
              <Input id="otp" {...registerOTP("otp")} />
              {otpErrors.otp && (
                <p className="text-red-500 text-sm mt-1">
                  {otpErrors.otp.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </form>
        )}
      </div>
      <Toaster />
    </div>
  );
}
