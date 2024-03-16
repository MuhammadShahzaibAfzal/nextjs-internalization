/* eslint-disable react/no-unescaped-entities */

import { getDictionary } from "@/lib/dictionary";

const AboutPage = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-5">{dict.page.about.title}</h1>
      <p className="w-[70%] leading-10 mx-auto text-justify">
        {dict.page.about.description}
      </p>
    </div>
  );
};

export default AboutPage;
