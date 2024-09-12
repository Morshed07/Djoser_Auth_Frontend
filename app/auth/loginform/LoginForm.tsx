"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"; 

import { logInFormSchema } from "./LoginSchema";
import Link from "next/link";
import { handleLogin } from "@/lib/actions/ServerAction";
import { useState } from "react";

import { useToast } from "@/hooks/use-toast";
import { ScaleLoader } from "react-spinners";
import { MarginIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

// Define the form data type
interface FormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await handleLogin(formData);

      if (response.success) {
        toast({
          title: "Success",
          description: "You have logged in successfully",
        })
        // Redirect to dashboard or desired page
        router.push('/')
      } else {
        toast({
          title: "Error",
          description: "Login Unsuccessfull !",
        })
      }
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error !",
        description: error.detail,
      }) // Show error message
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a valid email" {...field} />
                        
                      </FormControl>
                      <div className="mt-3">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link href="/auth/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <div className="mt-3">
                    <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled = {isLoading}
              >
                {isLoading ? (
                <div className="flex justify-center items-center" style={{background:"transparent"}}>
                  <ScaleLoader color="#fff" height={16} width={4} /> 
                </div>
                ) : (
                  'Sign in'
                )}
              </Button>
            </div>
          </form>
          </Form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link href="/auth/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an account now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
