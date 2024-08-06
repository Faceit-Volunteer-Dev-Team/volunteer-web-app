import React from "react";
import Link from "next/link";
import { Container } from "./shared/container";
import { Logo } from "./icons/logo";
import { getSession } from "../app/lib/getSession";
import { signOut } from "../app/auth";
import { Button } from "./shared/button";
import { redirect } from "next/navigation";

const Header = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px] text-off-white">
      <Container className="flex justify-between items-center h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="h-[1.8rem] w-[1.8rem]" />
          <span className="ml-2 font-semibold">Volunteers</span>
        </Link>
        <ul className="hidden md:flex space-x-4 list-none">
          {!user ? (
            <>
              <li>
                <Link href="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mt-2">
                <Link href="/private/dashboard" className="hover:text-gray-400">
                  Dashboard
                </Link>
              </li>

              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button type="submit">Logout</Button>
              </form>
            </>
          )}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
