"use client";

import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/Topbar";
import QueryProvider from "@/context/QueryClientProvider";
import { NextUIProvider } from "@nextui-org/react";
import { DM_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./globals.css";

const dM_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [visible, setVisible] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <html lang="pt">
      <body
        className={`${dM_Sans.className} antialiased flex bg-background min-h-screen`}
      >
        <NextUIProvider navigate={router.push} className="flex w-full">
          <QueryProvider>

            <div className="flex flex-col sm:flex-row">
              <Sidebar />

              <div className="flex flex-col w-full h-screen">
                <TopBar onMenu={handleVisible} pathname={pathname} notificationsCount={4} />
                <div className="flex-1 max-h-[calc(100vh-64px)] overflow-y-auto">
                  {children}
                </div>
              </div>
            </div>

          </QueryProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
