"use client";

import { useRouter } from "next/navigation";

const LanguageToggle = ({ lang }) => {
  const router = useRouter();
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={lang}
        onChange={(e) => {
          router.push(`/${e.target.value}`);
        }}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="ur">Urdu</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageToggle;
