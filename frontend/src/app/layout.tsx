import type { Metadata } from "next";
import "./globals.css";
import { CountriesProvider } from './contexts/CountriesContext';

export const metadata: Metadata = {
  title: "My country app",
  description: "A incredible all world country information app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <CountriesProvider>{children}</CountriesProvider>
      </body>
    </html>
  );
}
