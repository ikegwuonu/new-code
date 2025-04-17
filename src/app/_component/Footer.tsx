import {
  Facebook,
  Instagram,
  Linkedin,
  Locator,
  Twitter,
} from "@/components/svg";
import Image from "next/image";
import React, { Fragment } from "react";
const links = [
  "home",
  "about us",
  "contact us",
  "all podcast",
  "advertise",
  "resources",
  "connect with us",
];
//const socials: React.FC[] = [Instagram, Facebook, Twitter, Locator, Linkedin];

export default function Footer() {
  return (
    <div className="bg-[#282828] px-[60px] pt-[29px] pb-[23px]">
      <Image src={"/logo.png"} width={160} height={64} alt="logo" />
      <div className="py-[50px] flex items-center justify-between">
        <div className="py-[50px] flex items-center text-[#c9c9c9]">
          {links.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span className="px-[30px] text-4xl">|</span>}
              <p className="cursor-pointer text-base font-[700] uppercase">
                {item}
              </p>
            </Fragment>
          ))}
        </div>
        {/* <div className="flex items-center gap-[10px]">
          <Instagram />
          <Facebook />
          <Twitter />
          <Locator />
          <Linkedin />
        </div> */}
      </div>
      <p className="flex gap-8 items-center flex-wrap">
        <span>.</span> © Copyright 2021. All Rights Reserved.{" "}
        <span>Terms & conditions</span> <span>Privacy policy</span>
      </p>
    </div>
  );
}
