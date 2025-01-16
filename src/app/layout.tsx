"use client";

import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/Topbar";
import { NextUIProvider } from "@nextui-org/react";
import { DM_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";

const dM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ['500', '600', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="pt">
      <body
        className={`${dM_Sans.className} antialiased flex bg-background min-h-screen`}
      >
        <NextUIProvider navigate={router.push} className="flex w-full">
          <Sidebar />

          <div className="flex flex-col w-full">
            <TopBar pathname={pathname} notificationsCount={4} />
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
