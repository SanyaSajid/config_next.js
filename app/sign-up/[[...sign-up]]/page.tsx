"use client";

import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <Link href="/" className="text-3xl font-bold text-yellow-700 mb-2">Furniro</Link>

      <div className="p-8 max-w-md w-full ">
  

        <SignUp
          appearance={{
            elements: {
              formButtonPrimary:
        "bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded px-6 py-2 w-fit mx-auto",

      formFieldInput:
        "bg-white border border-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm",
    },
          }}
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  );
}
