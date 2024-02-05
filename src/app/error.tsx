"use client";

import { useEffect } from "react";

// biome-ignore lint: "TODO: Fix this later"
export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full justify-center items-center flex px-4 flex-col ">
      <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center">
        Sorry, something went wrong!
      </h1>
    </div>
  );
}
