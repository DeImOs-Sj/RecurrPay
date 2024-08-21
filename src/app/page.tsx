"use client";
import { MainNav } from "./components/User_nav";
import Landing from "./components/Landing_text";
import { Button } from "@/components/ui/button";
import Globe from "./components/Globe";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
        <div className="tems-center relative flex justify-center">
          <div className="mx-auto flex flex-col gap-10 p-6 text-center md:flex-row md:space-x-6 md:text-left">
            <div className="max-w-2xl">
              {/* <h1 className="mb-4 mt-40 text-6xl font-bold"></h1> */}
              <Landing />
              <p className="mb-6 text-lg">
                Easiest way to manage payroll and recurring subscriptions and
                seamlessly do cross border payments with the power of Hedera.
              </p>
              <Button size="lg" className="bg-[#062056] rounded-full">
                Get Started
              </Button>
            </div>
            <div className="flex h-[600px] w-[600px] justify-center md:mt-0 md:justify-start">
              <Globe />
            </div>
          </div>
        </div>
        {/* Create the brand names. All should be in gray in a single line */}
        {/* <div className="m-5 my-10 flex justify-around">
          <Image
            src="/brand6.jpeg"
            alt="Brand1"
            width={150}
            height={150}
            className=""
          />
          <Image src="/brand5.svg" alt="Brand2" width={150} height={150} />
          <Image src="/brand12.jpg" alt="Brand3" width={150} height={150} />
          <Image src="/brand7.svg" alt="Brand4" width={150} height={150} />
          <Image src="/brand4.png" alt="Brand5" width={150} height={150} />
        </div> */}
      </div>
      <div className="my-10 mt-20 text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-5xl font-bold">What we are doing?</h1>
          <p className="mb-10 max-w-[800px] text-center text-lg text-gray-700">
            Helping the organisations with payrolls and recurring payments.
            Helping the org. Helping the organisations with payrolls and
            recurring payments
          </p>
        </div>
        <div className="flex justify-center gap-10 align-middle">
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <Image
              src="/iceloid.svg"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">
              Automating Recurring Payments
            </h1>
            <p className="text-lg text-gray-700">
              Streamlining payroll, grants, and contractor payments.Eliminating
              manual processes and reducing human error
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <Image
              src="data:image/png;base64,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"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">
              Leveraging Stellar Blockchain
            </h1>
            <p className="text-lg text-gray-700">
              Ensuring secure and transparent transactions. Enabling multi-token
              support and built-in currency conversion
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <Image
              src="/simplify.svg"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">
              Simplifying Financial Management
            </h1>
            <p className="text-lg text-gray-700">
              Providing smart notifications for timely payments. Offering
              scalable solutions from small teams to large enterprises
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-end justify-center bg-slate-200 py-20">
        <Image src="/dash.png" alt="Dash" width={300} height={300} />
        <div className="w-1/3">
          <h1 className="text-3xl">
            Finding it tough to manage your employees payroll while paying them
            on crypto?
          </h1>
          <p className="text-lg">
            Are you also hiring for an underpaid and overworked employee to
            manage your payrolls?
          </p>
        </div>
      </div>
    </div>
  );
}
