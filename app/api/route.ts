import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  let res = { message: "invalid" };

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const steamProfile = formData.get("steam-profile") as string | null;
  const region = formData.get("region") as string | null;
  const discordId = formData.get("discordid") as string | null;

  if (!name || !email || !discordId) {
    res = { message: "Please fill all required fields" };
  } else {
    res = { message: "Data saved successfully" };
  }

  return NextResponse.json(res);
}
