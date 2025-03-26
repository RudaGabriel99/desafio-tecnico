"use client";

import { Avatar } from "@nextui-org/react";
import IconComunity from "@public/IconComunity.svg";
import IconConect from "@public/IconConection.svg";
import IconConfig from "@public/IconConfig.svg";
import IconHome from "@public/IconHome.svg";
import IconProfile from "@public/IconProfile.svg";
import IconService from "@public/IconService.svg";
import Logo from "@public/Logo.png";
import IconUser from "@public/user.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onClose?: () => void;

}

export const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Início", icon: IconHome, active: false },
    { href: "/conection", label: "Conexões", icon: IconConect, active: false },
    { href: "/services", label: "Serviços", icon: IconService, active: false },
    { href: "/community", label: "Comunidade", icon: IconComunity, active: true },
    { href: "/profile", label: "Perfil", icon: IconProfile, active: true },
    { href: "/settings", label: "Configurações", icon: IconConfig, active: false },
  ];

  return (
    <div className="flex flex-col w- sm:w-72 m-3 bg-primary text-white p-5 rounded-[30px]">
      <div className="mb-8 flex flex-row items-center justify-between">
        <Image src={Logo} alt="logo" />
      </div>

      <nav className="flex flex-col gap-1">
        {menuItems.map(({ href, label, active }) => (
          <div
            key={href}
            className={`flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer transition-colors ${active
              ? pathname === href
                ? "bg-gradientBlue text-white"
                : "hover:bg-emphasisBlue text-white"
              : "opacity-50 cursor-not-allowed"
              }`}
          >
            {active ? (
              <Link href={href} className="flex items-center gap-2">
                {/* <Image src={icon} alt={label} className="w-4" /> */}
                <label>{label}</label>
              </Link>
            ) : (
              <>
                {/* <Image src={icon} alt={label} className="w-4" /> */}
                <label>{label}</label>
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700 flex items-center">
        <div className="flex w-full items-center gap-2">
          <Avatar size="sm" src={IconUser.src} />
          <div>
            <p className="text-white font-semibold text-sm">Joaquim Arquino</p>
            <p className="font-light text-white text-xs">
              joaquim@helphub.com
            </p>
          </div>
        </div>
        {/* <Image
          src={IconExit}
          alt="IconExit"
          className="w-5 h-5 cursor-pointer"
        /> */}
      </div>
    </div>
  );
};
