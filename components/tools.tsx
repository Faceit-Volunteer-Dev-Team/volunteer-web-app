import Image from "next/image";

export const Tools = () => (
  <div className="text-white  font-Play flex items-center justify-center min-h-[48rem] ">
    <div className="relative order-last content-center flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start     p-8 text-center md:max-w-[calc(80.66%-12px)] md:basis-[calc(80.66%-12px)] md:p-14">
      <Image
        src="/admin6.png"
        alt="matchroom"
        width={1920}
        height={1920}
        className="absolute inset-0 h-full w-full object-contain"
      ></Image>
      <Image
        src="/match.png"
        alt="matchcontrol"
        className="absolute mx-auto my-auto w-1/3 inset-0"
        width={1920}
        height={1920}
      ></Image>
    </div>
  </div>
);
