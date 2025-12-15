import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const primaryFont = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const secondaryFont = Instrument_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crown Digital Labs | Web, Mobile, Cloud & DevOps",
  description:
    "Crown Digital Labs provides expert software development, including web & mobile apps, UI/UX design, cloud solutions, and DevOps for scalable digital products.",
};

const RootLayout = ({ children }: AppLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
