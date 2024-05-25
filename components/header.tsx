"use client";

import Link from "next/link";
import { Container } from "./shared/container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Faceit Volunteer Team
        </Link>

        <div className="ml-auto flex h-full items-center">
          <Link className="mr-6 text-sm" href="/login">
            Log in
          </Link>
        </div>
      </Container>
    </header>
  );
};
