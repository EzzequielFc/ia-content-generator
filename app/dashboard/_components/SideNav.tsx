"use client";

import React, { useEffect } from "react";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>

      <hr className="my-6 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => {
          return (
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === menu.path && "bg-primary text-white"
              } `}
              key={index}
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
