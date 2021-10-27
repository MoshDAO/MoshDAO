import type { FC } from "react";

import { MIRROR_ARTICLE_URL } from "@/home/const/config";

export const ButtonCTA: FC = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex space-x-6">
        <button
          disabled
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-trueGray-50 disabled:hover:bg-gray-300 bg-gradient-to-r from-pink-400 hover:from-pink-300 disabled:hover:from-pink-200 disabled:from-pink-200 via-purple-400 hover:via-purple-300 disabled:hover:via-purple-200 to-indigo-500 hover:to-indigo-400 disabled:hover:to-indigo-300 disabled:to-indigo-300 rounded-md border hover:border-2 disabled:hover:border border-gray-600 shadow-xl disabled:hover:opacity-60 disabled:opacity-60 hover:scale-105 disabled:hover:scale-100"
        >
          Coming soon...
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={MIRROR_ARTICLE_URL}
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-pink-400 bg-pink-100 hover:bg-pink-200 rounded-md border border-transparent hover:border-red-400 focus:ring-pink-500"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
