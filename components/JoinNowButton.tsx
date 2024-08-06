// JoinNowButton.tsx
"use client";

import React from "react";
import { Button } from "./shared/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const JoinNowButton = () => {
  const router = useRouter();

  const handleJoinNow = async () => {
    const result = await signIn("faceit", {
      redirect: false,
      callbackUrl: "/form",
    });
    if (result?.error) {
      console.error("Sign in failed:", result.error);
    } else {
      router.push("/form");
    }
  };

  return (
    <Button
      onClick={handleJoinNow}
      className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
    >
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Join Now!
      </span>
    </Button>
  );
};

export default JoinNowButton;
