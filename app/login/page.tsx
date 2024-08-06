import { signIn } from "../auth";
import { redirect } from "next/navigation";
import { getSession } from "../lib/getSession";
import { Button } from "@/components/shared/button";

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form
        action={async () => {
          "use server";
          await signIn("faceit");
        }}
      >
        <Button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Faceit Connect
          </span>
        </Button>
      </form>
    </div>
  );
};
export default LoginPage;
