import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12 h-screen md:h-full">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">ATIC SPOT</h1>
            {/* <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p> */}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              {/* <Label htmlFor="email">Email</Label> */}
              <Input
                id="voucherCode"
                type="text"
                placeholder="Enter Voucher Code"
                required
              />
            </div>
            {/* <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div> */}
            <Link href="/login">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-center">Get a free package</h1>
          <div className="mt-4 text-center text-sm">
            For help, Call/Whatsapp{" "}
            <a href="tel:+256745525539">+256745525539</a>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://plus.unsplash.com/premium_photo-1687558345854-a07ac0be8cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lmaXxlbnwwfHwwfHx8MA%3D%3D "
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
