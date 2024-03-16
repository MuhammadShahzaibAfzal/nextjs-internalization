import { getDictionary } from "@/lib/dictionary";
import React from "react";

const ContactPage = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-5">
        {dict.page.contact.title}
      </h1>
      <p className="w-[60%] text-center mx-auto leading-10">
        {dict.page.contact.description}
      </p>
    </div>
  );
};

export default ContactPage;
