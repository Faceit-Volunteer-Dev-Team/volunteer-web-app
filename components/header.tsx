import { auth, signIn, signOut } from "../app/auth";
import React from "react";

import Link from "next/link";
import { Container } from "./shared/container";
import { Logo } from "./icons/logo";

async function Header() {
  const session = await auth();
  return (
    <header className="fixed top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px] text-off-white">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-2 h-[1.8rem] w-[1.8rem]" /> Volunteers
        </Link>

        <div className="ml-auto flex h-full items-center">
          <Link href={"/clientPage"}>Client Page</Link>
          <Link href={"/serverPage"}>Server Page</Link>
          <Link href={"/middlewareProtected"}>Middleware Protected Page</Link>
          <div className="ml-auto">
            {session && session.user ? (
              <div className="flex gap-2">
                <p>{session.user.name}</p>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button type="submit">Sign Out</button>
                </form>
              </div>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn();
                }}
              >
                <button type="submit">Sign In</button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header;
