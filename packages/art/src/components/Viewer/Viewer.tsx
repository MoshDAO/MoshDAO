import clsx from "clsx";
import { useEffect, useState, useCallback } from "react";

import type { FC } from "react";

import { Button } from "@/art/components/Button";

import { useCopy } from "@/art/hooks/useCopy";
import { useDebouncedValue } from "@/art/hooks/useDebouncedValue";
import { useRandomNumber } from "@/art/hooks/useRandomNumber";

export const Viewer: FC = () => {
  const [isCopied, copy] = useCopy();
  const { randomNumber, setRandomNumber } = useRandomNumber();
  const [isLoaded, setIsLoaded] = useState(true);

  const artURL = "https://art.mosh.lol/";
  const debouncedImageURL = useDebouncedValue(`${artURL}${randomNumber}`, 300);

  const setRandom = useCallback(() => {
    const randomNumber = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    setRandomNumber(randomNumber(0, 99));
  }, [setRandomNumber]);

  useEffect(() => {
    return setIsLoaded(false);
  }, [debouncedImageURL]);

  return (
    <div className="w-full">
      <div className="overflow-hidden relative mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={400}
          width={400}
          className={clsx("rounded-md shadow-xl", !isLoaded && "blur-sm")}
          src={debouncedImageURL}
          alt={`Art for layout`}
          onLoad={(): void => {
            return setIsLoaded(true);
          }}
        />
      </div>
      <div className="flex justify-end space-x-4">
        <Button
          onClick={(): void => {
            return copy(debouncedImageURL);
          }}
        >
          {isCopied ? "Copied!" : "Copy Image URL"}
        </Button>
        <Button
          className="text-blueGray-100 bg-gradient-to-r from-pink-300 hover:from-pink-200 via-purple-300 hover:via-purple-200 to-indigo-400 hover:to-indigo-300 rounded-lg border-white duration-300 hover:scale-105"
          onClick={setRandom}
        >
          Generate Random Mosh
        </Button>
      </div>
    </div>
  );
};
