'use client'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Form } from "@/components/ui/form"

import { Button } from "@/components/ui/button";
import { useForm } from 'react-hook-form';

import { Input } from "@/components/ui/input"

export default function ForgotPassword() {
    const form = useForm({
        defaultValues: {
          email: "",
        }
      })

      const onSubmit = (values: any) => {
        console.log(values)
        // Add your registration logic here (e.g., API call)
      }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
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
                          <Input type="email" placeholder="Enter Valid Email" {...field} />
                        </FormControl>
                        <div className="mt-3">
                        <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </Button>
            </div>
          </form>
          </Form>
        </div>
      </div>
 
    </>
  )
}
