import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={180} height={60} />
      </Link>
      <MobileNav />
      <Button href="/contact" className="hidden lg:block">
        Contact Us
      </Button>
    </header>
  );
};

export default Header;
