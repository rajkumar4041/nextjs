import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Protected Route Sign Out to See the magic of protected Route
        </h1>
        <button className=" mb-2 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          <SignOutButton />
        </button>
        <p className="mb-6 text-gray-700">
          This page demonstrates a{" "}
          <span className="font-semibold text-blue-600">protected route</span>{" "}
          using Clerk authentication.
        </p>
        <SignedOut>
          <div className="mb-4">
            <span className="text-red-500 font-medium">
              You must be signed in to access the protected page.
            </span>
          </div>
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
              Sign In to Continue
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/">
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition">
              Go to Home Page
            </button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default page;
