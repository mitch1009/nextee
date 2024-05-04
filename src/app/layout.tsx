import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {env} from "process";
import ServerProvider from "@/components/ServerProvider/ServerProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nextee tools| Home",
  description: "Nextjs Auth Prisma tRPC template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = env.AUTH_URL
  return (
    <ServerProvider url={`${url}/api/trpc`}>
      <html lang="en" className="bg-gray-50">
        <body className={inter.className}>{children}</body>
      </html>
    </ServerProvider>
  );
}
