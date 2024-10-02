"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CreateAuction = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="flex items-center justify-center text-xl font-bold sm:text-3xl text-gray-950 mt-4 mb-2">
          Create Auction and Share your Items
        </h1>
        <div className="flex p-20 items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg border-gray-900 bg-slate-100"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Put an Item for Bid</FormLabel>
                    <FormControl>
                      <>
                        <Input
                          required
                          className="max-w-lg"
                          name="name"
                          placeholder="Name your item"
                        />
                        <Input
                          required
                          className="max-w-lg"
                          name="startingPrice"
                          type="number"
                          step="0.01"
                          placeholder="What to start your auction at"
                        />
                        <Input type="file" name="file"></Input>
                      </>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="self-end" type="submit">
                Post Item
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateAuction;
