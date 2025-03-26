
import { fontSans } from '@/config/fonts';
import { Providers } from '@/provider/provider';
import clsx from "clsx";
import '../styles/globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={clsx(
          "!bg-background font-sans antialiased min-h-svh w-screen overflow-x-hidden",
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
