import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
// app/layout.js
export const metadata = {
  title: "Jana Al Abed | Full-Stack Developer",
  description:
    "Full-stack developer building production-grade web apps with React, ASP.NET Core, and PostgreSQL. View my projects, experience, and resume.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
