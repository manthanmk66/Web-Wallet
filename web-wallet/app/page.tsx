"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wallet,
  ArrowRightLeft,
  CreditCard,
  PieChart,
  Menu,
} from "lucide-react";
import { generateMnemonic } from "bip39";
import { FaRegCopy } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

import Link from "next/link";
import Theme from "@/components/ui/darkmode";

export default function Component() {
  const [mnemonic, setMnemonic] = useState("");
  const [textToCopy, setTextToCopy] = useState(
    "This is the text to be copied!"
  );
  const [copySuccess, setCopySuccess] = useState("");
  const { toast } = useToast();

  const handleclick = () => {
    const data = generateMnemonic();
    setMnemonic(data);
    console.log("Generated Mnemonic:", data);
    console.log("clicked");
  };

  const copyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(textToCopy);

      toast({
        description: "Text Copied.",
      });
    } catch (err) {
      setCopySuccess("Failed to copy text.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Wallet className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">WebWallet</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Theme />
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage Your Money with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  WebWallet is your all-in-one solution for managing your
                  finances, making transactions, and tracking your expenses.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className=" gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                {/* <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Finances at a Glance
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Get a quick overview of your account balance, recent
                    transactions, and financial insights.
                  </p>
                </div> */}
              </div>
              <Button onClick={handleclick} variant="outline">
                Get Started
              </Button>
              <div className="flex flex-col space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Balance</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {mnemonic &&
                      mnemonic.split(" ").map((word, index) => (
                        <Button
                          variant="outline"
                          className="text-xl font-bold"
                          key={index}
                        >
                          {word}
                        </Button>
                      ))}
                    {mnemonic && (
                      <FaRegCopy
                        className="cursor-pointer"
                        onClick={() => copyToClipboard(mnemonic)}
                      />
                    )}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Grocery Store</span>
                        <span className="font-bold text-red-500">-$85.23</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Salary Deposit</span>
                        <span className="font-bold text-green-500">
                          +$3,000.00
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Electric Bill</span>
                        <span className="font-bold text-red-500">-$120.50</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <ArrowRightLeft className="h-6 w-6 mb-2" />
                  <CardTitle>Easy Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Send and receive money with just a few clicks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CreditCard className="h-6 w-6 mb-2" />
                  <CardTitle>Virtual Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create virtual cards for secure online shopping.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <PieChart className="h-6 w-6 mb-2" />
                  <CardTitle>Expense Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Visualize your spending habits with detailed charts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 WebWallet. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
