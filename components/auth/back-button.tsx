"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button className="font-normal w-full" size={"sm"} variant={"link"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
