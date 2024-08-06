import { getSession } from "../lib/getSession";
import { redirect } from "next/navigation";
import FormClient from "./formclient";

export default async function ApplicationForm() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/login?callbackUrl=/form");
  }

  return <FormClient />;
}
