import moment from "moment";
import dynamic from "next/dynamic";
import Image from "next/image";

import { ButtonCTA } from "@/home/components/ButtonCTA";
import { CountdownClock } from "@/home/components/CountdownClock";
import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";
import BlueHandImage from "@/home/public/BlueHand.png";
import LogoGif from "@/home/public/Logo.gif";
import LogoImage from "@/home/public/Logo.png";
import PurpleHandImage from "@/home/public/PurpleHand.png";
import RedWaveImage from "@/home/public/RedWave.png";
import SunshineImage from "@/home/public/Sunshine.png";

const Canvas = dynamic(async () => {
  const m = await import("@react-three/fiber");
  return m.Canvas;
});

const VaporGrid = dynamic(async () => {
  const m = await import("@/home/components/VaporGrid");
  return m.VaporGrid;
});

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-400 via-blue-200 to-sky-400 transition-colors duration-1000">
      <div className="absolute inset-x-0 top-0 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="transition-opacity aspect-w-12 aspect-h-6"
          height={30}
          width={30}
          src={SunshineImage}
          alt="Sunshine"
          layout="responsive"
        />
      </div>
      <div className="absolute inset-y-1/2 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="transition-opacity animate-none aspect-w-12 aspect-h-6"
          height={30}
          width={30}
          alt="PurpleHand"
          src={PurpleHandImage}
          layout="responsive"
        />
      </div>
      <div className="overflow-hidden absolute inset-x-1/2 sm:inset-x-2/3 lg:inset-x-3/5 xl:inset-x-3/4 top-0 right-0 w-32 md:w-64 h-16 md:h-32">
        <Image
          className="transition-opacity animate-none rotate-180 aspect-w-2 aspect-h-1"
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          objectPosition="right"
          alt="BlueHand"
          src={BlueHandImage}
        />
      </div>
      <div className="absolute right-0 bottom-0 w-32 md:w-64 h-32 md:h-64">
        <Image
          className="transition-opacity animate-none aspect-w-12 aspect-h-6"
          height={10}
          width={30}
          alt="RedWave"
          src={RedWaveImage}
          layout="responsive"
        />
      </div>
      <Image
        className="transition-opacity animate-none scale-50"
        alt="Logo"
        src={LogoGif}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <body>
        <div className="flex overflow-visible absolute inset-x-0 top-0 justify-center items-center h-2/3 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-16 md:mt-24 xl:mt-36">
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_LAUNCH)}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onComplete={() => {}}
            />
            <ButtonCTA />
            <FooterLogo
              discord="https://discord.gg/SsF2QejwvZ"
              github="https://github.com/sentrei/mosh.lol"
              twitter="https://twitter.com/MoshDAO"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 sm:h-2/5">
          <Canvas className="w-full h-full ">
            <VaporGrid />
          </Canvas>
        </div>
      </body>
    </div>
  );
};

export default IndexPage;
