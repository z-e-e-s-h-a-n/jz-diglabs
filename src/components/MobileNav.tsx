"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainMenu } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, TextAlignEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
}

const Navigation = ({ className, isMobile }: NavigationProps) => {
  const [openMenu, setOpenMenu] = useState("");
  const pathname = usePathname();

  const toggleSubMenu = (label: string, hasSub?: boolean) => {
    if (!hasSub) {
      setOpenMenu("");
      return;
    }
    setOpenMenu((prev) => (prev === label ? "" : label));
  };

  return (
    <nav className={cn("navigation", className)}>
      {mainMenu.slice(0, 6).map(({ label, href, subMenu }) => {
        return (
          <div
            key={label}
            className={cn("group", pathname === href ? "active" : "")}
            onClick={() => (isMobile ? toggleSubMenu(label, !!subMenu) : null)}
          >
            <Link href={href}>{label}</Link>
            {subMenu && <ChevronDown />}
            {subMenu && (
              <ul className={cn("hidden", openMenu === label && "active")}>
                {subMenu.map(({ label, href }) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
};

const MobileNav = () => {
  return (
    <>
      <Navigation className="hidden lg:flex mr-4 lg:mr-16" />
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <TextAlignEnd className="size-6" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="z-100 p-8 items-start gap-8 lg:hidden overflow-y-auto"
        >
          <SheetClose>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={180}
                height={60}
              />
            </Link>
          </SheetClose>
          <Navigation isMobile />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
