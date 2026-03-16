import "./globals.css";
import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Er. Arjun Aryal | Software Engineer & Lecturer",
  description:
    "Portfolio site for Er. Arjun Aryal — software engineer, educator, and writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <SiteNav />
          <main className="layoutMain">{children}</main>
          <footer className="footer">
            <div className="container">
              <p>
                © {new Date().getFullYear()} Er. Arjun Aryal — Built with Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
