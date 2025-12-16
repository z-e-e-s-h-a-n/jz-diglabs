import { cn } from "@/lib/utils";
import React from "react";

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader = ({ title, className }: PageHeaderProps) => {
  return (
    <section className={cn("page-header", className)}>
      <h2>{title}</h2>
    </section>
  );
};

export default PageHeader;
