"use client";

import Icon from "./icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const checkUrl = () => {
  const router = useRouter();
  console.log(router.pathname);
};

const Navbar = () => {
  const menus = [
    {
      icon: "mdi:calendar-month",
      name: "예약",
      url: "/reservation",
    },
    {
      icon: "mdi:comment-quote",
      name: "커뮤니티",
      url: "/community",
    },
    {
      icon: "mdi:home",
      name: "홈",
      url: "/",
    },
    {
      icon: "mdi:note-text",
      name: "기록실",
      url: "/record",
    },
    {
      icon: "mdi:account",
      name: "마이페이지",
      url: "/mypage",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-full py-2.5 bg-neutral-100">
      {menus.map((menu, index) => (
        <Link href={menu.url} className="flex flex-col flex-1 gap-2">
          <div key={index} className="flex flex-col items-center gap-1">
            <Icon name={menu.icon} className="size-5 bg-neutral-700" />
            <div className="text-xs select-none font-semibold text-neutral-700">
              {menu.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
