import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">ATIC SPOT</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="card"
                type="number"
                placeholder="Enter Card Number"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>

          <h1 className="text-2xl font-bold text-center">Buy A Package</h1>

          <div className="flex items-center justify-center gap-5">
            <p>Pay with</p>
            <Image
              src="https://i0.wp.com/www.asaaseradio.com/wp-content/uploads/2020/10/MTN-Airtel.jpg?fit=394%2C128&ssl=1"
              alt="visa"
              width={150}
              height={150}
            />
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>

          <Table>
            <TableCaption>A list of bundles.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Duration</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Purchase</TableHead>
                {/* <TableHead className="text-right">Amount</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Daily</TableCell>
                <TableCell>UGX 1,000</TableCell>
                <TableCell>
                  <Button type="submit" className="w-full">
                    Buy
                  </Button>
                </TableCell>
                {/* <TableCell className="text-right">$250.00</TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weekly</TableCell>
                <TableCell>UGX 10,000</TableCell>
                <TableCell>
                  <Button type="submit" className="w-full">
                    Buy
                  </Button>
                </TableCell>
                {/* <TableCell className="text-right">$250.00</TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Monthly</TableCell>
                <TableCell>UGX 30,000</TableCell>
                <TableCell>
                  <Button type="submit" className="w-full">
                    Buy
                  </Button>
                </TableCell>
                {/* <TableCell className="text-right">$250.00</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://plus.unsplash.com/premium_photo-1687558345854-a07ac0be8cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lmaXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
