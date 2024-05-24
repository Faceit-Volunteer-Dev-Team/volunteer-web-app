import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Benefits from "@/components/benefits";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="flex items-center justify-center bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Benefits />
          <Footer />
        </div>
      </body>
    </html>
  );
}
