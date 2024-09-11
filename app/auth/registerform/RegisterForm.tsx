"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { registerFormSchema } from "@/app/auth/registerform/RegisterSchema"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"


export function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
    },
  })

  // Handle form submission
  const onSubmit = (values: any) => {
    console.log(values)
    // Add your registration logic here (e.g., API call)
  }

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
            Sign up to create account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fisrt Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                        
                      </FormControl>
                      <div className="mt-3">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              <div className="mt-2">
              <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                        
                      </FormControl>
                      <div className="mt-3">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-2">
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
              </div>
              <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
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
              <div className="mt-2">
                  <FormField
                    control={form.control}
                    name="re_password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
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

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </Button>
            </div>
          </form>
          </Form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
