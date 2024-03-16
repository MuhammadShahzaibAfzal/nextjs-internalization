import { getDictionary } from "@/lib/dictionary";
import React from "react";
import LanguageToggle from "./LanguageToggle";

const Footer = async ({ lang }) => {
  const dict = await getDictionary(lang);
  return (
    <footer className="bg-gray-100 py-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>{dict.footer.text}</p>
          <LanguageToggle lang={lang} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
