// @ts-ignore
import "./globals.css";
import Navbar from "../components/common/Navbar";

export const metadata = {
  title: "My Restaurant",
  description: "Modern food website using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
