"use client";

import { usePathname } from "next/navigation";
import IconComunity from "@public/IconComunity.svg";
import IconConect from "@public/IconConection.svg";
import IconService from "@public/IconService.svg";
import IconConfig from "@public/IconConfig.svg";
import IconHome from "@public/IconHome.svg";
import IconProfile from "@public/IconProfile.svg";
import IconExit from "@public/IconLogout.svg";
import Logo from "@public/Logo.png";
import IconUser from "@public/user.png";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/home", label: "Início", icon: IconHome },
    { href: "/conections", label: "Conexões", icon: IconConect },
    { href: "/services", label: "Serviços", icon: IconService },
    { href: "/community", label: "Comunidade", icon: IconComunity },
    { href: "/profile", label: "Perfil", icon: IconProfile },
    { href: "/settings", label: "Configurações", icon: IconConfig },
  ];

  return (
    <div className="flex flex-col h-screen w-72 m-3 bg-sidebarblue text-white p-5 rounded-[30px]">
      <div className="mb-8">
        <Image src={Logo} alt="logo" />
      </div>

      <nav className="flex flex-col gap-1">
        {menuItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-5 py-3 rounded-full cursor-pointer transition-colors ${
              pathname === href
                ? "bg-gradientBlue text-white"
                : "hover:bg-emphasisBlue text-white"
            }`}
          >
            <Image src={icon} alt={label} className="w-4" />
            <label className="cursor-pointer">{label}</label>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-gray-700 flex items-center">
        <div className="flex w-full items-center gap-2">
          <Image src={IconUser} alt="IconUser" className="text-white w-8 h-8" />
          <div>
            <p className="text-white font-semibold text-sm">Joaquim Arquino</p>
            <p className="font-light text-white text-xs">
              joaquim@helphub.com
            </p>
          </div>
        </div>
        <Image
          src={IconExit}
          alt="IconExit"
          className="text-white w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
};
