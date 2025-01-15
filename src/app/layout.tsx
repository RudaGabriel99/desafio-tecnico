"use client";

import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
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

  return (
    <html lang="pt">
      <body
        className={`${dM_Sans.className} antialiased flex bg-bgHome`}
      >
        <Sidebar />
        <div className="flex w-full flex-col gap-2">
          <TopBar pathname={pathname} notificationsCount={4} />
          {children}
        </div>
      </body>
    </html>
  );
}
