/* eslint-disable react/no-unescaped-entities */
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";

const page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-5">{dict.page.home.title}</h1>
      <p className="w-[60%] text-center mx-auto leading-10">
        {dict.page.home.description}
      </p>
      <div className="btnContainer mt-6">
        <Link
          className="bg-gray-300 px-6 rounded-sm py-3 mx-4 hover:bg-gray-400"
          href={`${lang}/about`}
        >
          {dict.navigation.about}
        </Link>
        <Link
          className="bg-gray-300 px-6 rounded-sm py-3 mx-4 hover:bg-gray-400"
          href={`${lang}/contact`}
        >
          {dict.navigation.contact}
        </Link>
      </div>
    </div>
  );
};

export default page;
