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
  title: "JZ Digital Labs | Building Scalable Digital Products",
  description:
    "JZ Digital Labs provides expert software development, including web & mobile apps, UI/UX design, cloud solutions, and DevOps for scalable digital products.",
};

const RootLayout = ({ children }: AppLayoutProps) => {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="4q94dqXOToNxmtg0IU5hWjm4SxT_D9Zn2OUkbmT_1zQ"
      />
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
