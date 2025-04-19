"use client";
import Image from "next/image";
import React from "react";
import {
  AllPodcasts,
  Calendar,
  DropdownIcon,
  LatestNews,
  NewEpisode,
  OurServices,
  SearchIcon,
} from "../svg/icon";
import Link from "next/link";
import { Menu } from "lucide-react";
import useScreenSize from "@/lib/hooks/use-screen-size";

const links: { name: string; dropdown?: string[] }[] = [
  { name: "Home" },
  { name: "Company", dropdown: ["Radio"] },
  { name: "Resources" },
  { name: "Contact Us" },
  { name: "Advertise" },
];
const menu: { name: string; icon: React.JSX.Element }[] = [
  { name: "Latest News", icon: <LatestNews /> },
  { name: "New Episodes", icon: <NewEpisode /> },
  { name: "Our Services", icon: <OurServices /> },
  { name: "All Podcasts", icon: <AllPodcasts /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { width } = useScreenSize();
  return (
    <section className="font-monteserrat">
      <div className="py-[10px] relative lg:px-[50px] px-4 flex-col lg:flex-row flex justify-between bg-main items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link href="./">
            <Image src="/ABR Logo 1.png" width={108} height={51} alt="Logo" />
          </Link>
          <Menu
            className="flex lg:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
        <div
          className={`flex lg:flex lg:flex-row fixed lg:relative bg-[#fcfcfc] px-4 lg:px-0 w-full lg:w-auto z-10 top-16 lg:top-0 flex-col items-start justify-start py-4 lg:pt:0 lg:items-center lg:gap-[57px] gap-2 ${
            width < 1024 && isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-[35px]">
            {links.map((link) => (
              <div
                key={link.name}
                className="cursor-pointer relative hover:text-slate-600 peer font-bold text-[15px] group font-dark flex items-center"
              >
                {link.name}
                {link.dropdown && (
                  <>
                    {" "}
                    <DropdownIcon />
                    <div className="hidden !peer-hover:text-red-400 !group-hover:text-red-400 bg-slate-50 rounded ">
                      {link.dropdown.map((item) => (
                        <p className="font-normal py-2 px-0.5" key={item}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <form className=" rounded-4xl text-white opacity-30 bg-black items-center flex py-[14px] px-[19px]">
            <SearchIcon />
            <input
              type="text"
              className="outline-none border-none text-[13px] placeholder:text-white font-bold text-white pl-[7px]"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div className="bg-black flex justify-between text-white items-center pr-[54px] gap-20 lg:gap-6 overflow-x-scroll xl:overflow-auto">
        <div className="bg-[url('/schedule.png')] px-[22px] w-full gap-14 xl:gap-0 whitespace-nowrap xl:w-1/3  flex justify-between py-[13px] relative bg-cover bg-center bg-no-repeat">
          <div className="flex gap-[17px]">
            <Image
              width={43}
              height={43}
              alt="play"
              src={"/Play.png"}
              className="h-[43px] w-[43px]"
            />
            <div className="">
              <p className="text-white font-[800] text-[18px] ">
                Listen to ABR Live Radio
              </p>
              <p className="font-bold text-[#9CCC65] pl-[14px] text-[13px]">
                ON AIR
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center font-[600] text-[13px] cursor-pointer">
            <Calendar />
            <p>View schedule</p>
          </div>
        </div>
        <div className="flex text-white font-[700] text-[15px] gap-[30px] items-center whitespace-nowrap">
          |
          {menu.map((item) => (
            <div
              className="flex gap-1 items-center cursor-pointer"
              key={item.name}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
