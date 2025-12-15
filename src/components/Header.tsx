import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">Pemogan</Link>
      <MobileNav />
      <Button className="hidden lg:block">Contact Us</Button>
    </header>
  );
};

export default Header;
