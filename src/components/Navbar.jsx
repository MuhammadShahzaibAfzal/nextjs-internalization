import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import React from "react";
import LanguageToggle from "./LanguageToggle";

const Navbar = async ({ lang }) => {
  const dict = await getDictionary(lang);
  const navigation = dict.navigation;
  return (
    <nav className="bg-gray-100 py-5 px-24 flex justify-between items-center">
      <div className="logo">
        <h1 className="font-bold text-xl">{navigation.logo}</h1>
      </div>
      <div className="links flex items-center gap-x-6">
        <Link href={`/${lang}`}>{navigation.home}</Link>
        <Link href={`/${lang}/about`}>{navigation.about}</Link>
        <Link href={`/${lang}/contact`}>{navigation.contact}</Link>
        <LanguageToggle lang={lang} />
      </div>
    </nav>
  );
};

export default Navbar;
