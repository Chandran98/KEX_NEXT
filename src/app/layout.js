import { Inter } from "next/font/google";
import "./globals.css";
import Rootlayout from "../app/rootlayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kairaa Exchange",
  description: "Buy Sell and Trade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/kex.png" />
      <body className={inter.className}>
        <Rootlayout>{children}</Rootlayout>
      </body>
    </html>
  );
}
