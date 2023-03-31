import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Rocket",
  description: "Search anything you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
