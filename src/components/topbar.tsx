"use client";

import { Avatar } from "@nextui-org/react";
import IconUser from "@public/user.png";
import { Bell, MagnifyingGlass } from "phosphor-react";
import InputSearch from "./Input";

type TopBarProps = {
    pathname: string;
    notificationsCount: number;
};

const getPageName = (pathname: string) => {
    switch (pathname) {
        case "/home":
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
        <div className="flex flex-row w-full bg-transparent text-white p-5 items-center justify-between">
            <h1 className="text-3xl font-semibold">
                {getPageName(pathname)}
            </h1>

            <div className="flex items-center gap-4 w-auto">
                <InputSearch placeholder="Procurar" icon={MagnifyingGlass} />
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
