"use client";


import { Avatar } from "@nextui-org/react";
import IconUser from "@public/user.png";
import { Bell, MagnifyingGlass } from "phosphor-react";
import InputSearch from "./input";

type TopBarProps = {
  pathname: string;
  notificationsCount: number;
  onMenu: () => void;
};

const getPageName = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Início";
    case "/conections":
      return "Conexões";
    case "/services":
      return "Serviços";
    case "/community":
      return "Comunidade";
    case "/profile":
      return "Perfil";
    case "/settings":
      return "Configurações";
    default:
      return "Página não localizada";
  }
};

export const TopBar = ({ pathname, notificationsCount }: TopBarProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full bg-transparent text-white p-5 gap-4 sm:flex-nowrap">

      <h1 className="text-lg sm:text-3xl font-semibold text-center sm:text-left w-full sm:w-auto">
        {getPageName(pathname)}
      </h1>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
        <div className="flex-grow sm:flex-grow-0 w-full sm:w-auto">
          <InputSearch placeholder="Procurar" icon={MagnifyingGlass} />
        </div>

        <div className="relative bg-primary p-2 rounded-full cursor-pointer">
          <Bell size={22} className="text-white" />
          {notificationsCount > 0 && (
            <div className="absolute top-0 right-0 bg-gradientBlue text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
              {notificationsCount}
            </div>
          )}
        </div>

        <Avatar size="md" src={IconUser.src} />
      </div>
    </div>
  );
};
