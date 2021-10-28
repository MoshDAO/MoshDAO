import type { FC } from "react";

import { MIRROR_ARTICLE_URL } from "@/home/const/config";

export const ButtonCTA: FC = () => {
  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex space-x-6">
        <button
          disabled
          className="py-2 px-4 font-mono bg-gray-200 hover:bg-gray-300 border-b-2 border-purple-500 hover:border-purple-600"
        >
          Coming soon...
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={MIRROR_ARTICLE_URL}
          className="py-2 px-4 font-mono bg-gray-200 hover:bg-gray-300 border-b-2 border-purple-500 hover:border-purple-600"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
