"use client";

import QueryProvider from "@/context/QueryClientProvider";
import { NextUIProvider } from "@nextui-org/react";
import { DM_Sans } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import Head from "next/head";

const dM_Sans = DM_Sans({
  subsets: ["latin"], 
  weight: ["500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <html lang="pt">
      <Head>
        <title>Meu Projeto - Título da Página</title>
        <meta name="description" content="Descrição do meu projeto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${dM_Sans.className} antialiased flex bg-background min-h-screen`}>
        <NextUIProvider navigate={router.push} className="flex w-full">
          <QueryProvider>
            <div className="flex flex-col sm:flex-row w-full">
              {/* Sidebar com controle de visibilidade */}
              <aside className={`${isSidebarVisible ? 'block' : 'hidden'} sm:block`}>
                <Sidebar />
              </aside>
              
              <div className="flex flex-col w-full h-screen">
                {/* TopBar recebe a função para alternar o menu */}
                <header>
                  <TopBar 
                    onMenu={toggleSidebar} 
                    pathname={pathname} 
                    notificationsCount={4} 
                  />
                </header>
                
                {/* Área principal para renderização dos children */}
                <main className="flex-1 max-h-[calc(100vh-64px)] overflow-y-auto">
                  {children}
                </main>
              </div>
            </div>
          </QueryProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
