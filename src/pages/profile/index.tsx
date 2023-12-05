import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import Layout from '@/components/layout';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters.",}),
  tanggallahir: z.string().min(2, {message: "Birth Date.",}),
  hp: z.string().min(2, {message: "Phone number must be at least 9 characters.",}),
  email: z.string().min(2, {message: "Email.",}),

})

const Profile = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      tanggallahir: "",
      hp: "",
      email: "",

    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Layout>
      <figure className="aspect-square bg-white border-80">
    <Form {...form}>
      <div>
      <h1 className="font-bold h2-bold md:h2-bold pt-5 sm:pt-12">Personal Data</h1>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <figure className="flex w-60 h-60">
          <img
            className="aspect-square rounded-full object-cover"
            src="https://via.placeholder.com/250"
            alt="photo"
          />
        </figure>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="user" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tanggallahir"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Lahir</FormLabel>
              <FormControl>
                <Input placeholder="28 Mei 1997" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No Handphone</FormLabel>
              <FormControl>
                <Input placeholder="081212123667" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Sosial@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">Edit Profile</Button>
        <Button type="submit">Delete Profile</Button>
      </form>
    </Form>
    </figure>
    </Layout>
  )
}



export default Profile;