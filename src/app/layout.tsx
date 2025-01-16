import "./globals.css";
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={ cn("min-h-screen bg-background font-sans antialiased"
        )}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
