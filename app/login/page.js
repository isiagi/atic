"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function Dashboard() {
  const [dialogData, setDialogData] = useState({ duration: "", amount: "" });
  const [openDialog, setOpenDialog] = useState(false);
  const [phone, setPhone] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-995d55339f4c8ccc70c0399055fdaedc-X",
    tx_ref: Date.now(),
    amount: dialogData.amount,
    currency: "UGX",
    payment_options: "card, mobilemoneyuganda",
    customer: {
      email: `aticspot@ug.com`,
      phone_number: `${phone}`,
      name: `dggdg`,
    },
    customizations: {
      title: "ATIC SPOT",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const onFinish = () => {
    // setLoading(true);
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        // setLoading(false);
      },
      onClose: () => {},
    });
  };

  const openBuyDialog = (duration, amount) => {
    setDialogData({ duration, amount: parseFloat(amount.replace(/,/g, "")) });
    setOpenDialog(true);
  };

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

          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}

          <Table>
            <TableCaption>A list of bundles.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Duration</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Purchase</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { duration: "Daily", amount: "1,000" },
                { duration: "Weekly", amount: "10,000" },
                { duration: "Monthly", amount: "30,000" },
              ].map((bundle, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {bundle.duration}
                  </TableCell>
                  <TableCell>UGX {bundle.amount}</TableCell>
                  <TableCell>
                    <Button
                      // variant="outline"
                      onClick={() =>
                        openBuyDialog(bundle.duration, bundle.amount)
                      }
                      className="w-full"
                    >
                      Buy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Dialog */}
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="bg-white text-black sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Purchase {dialogData.duration} Bundle</DialogTitle>
                <DialogDescription>
                  You are about to purchase a {dialogData.duration} bundle for
                  UGX {dialogData.amount}.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    // defaultValue="07575757575"
                    className="col-span-3"
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={onFinish}>
                  Pay UGX {dialogData.amount}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
