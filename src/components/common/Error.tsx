"use client";

import { RobotIcon } from "@/icons/actions/RobotIcon";
import { useDevice } from "@/utils/hooks/device";
import { useWindow } from "@/utils/hooks/window";
import Image from "next/image";
import Section from "../sections/Section";
import { Heading } from "../typography/Heading";

type ErrorProps = {
  statusCode?: number;
  title: string;
};

export function Error({ title, statusCode }: ErrorProps) {
  const { height } = useWindow();
  const device = useDevice();

  return (
    <Section
      bg="dark"
      align="center"
      className="relative"
      style={{
        height: height ? height : "100vh",
      }}
    >
      <Image
        src={device === "mobile" ? "/images/background/1x.jpg" : "/images/background/2x.jpg"}
        alt="footer background"
        width={3840}
        height={2160}
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
      />

      <div className="flex flex-col items-center justify-center gap-12 text-center md:gap-16">
        <RobotIcon className="w-1/2 fill-red-500 xl:w-full" />

        <span className="flex flex-col gap-4">
          {statusCode && (
            <Heading type="h2" color="red">
              {statusCode}
            </Heading>
          )}
          <Heading type="h3" maxCharacters={20}>
            {title}
          </Heading>
        </span>
      </div>
    </Section>
  );
}
