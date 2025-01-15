"use client";

import IconUser from "@public/user.png";
import Image from "next/image";
import { Bell, MagnifyingGlass } from "phosphor-react";
import InputSearch from "./input";

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
        <div className="flex flex-row w-full bg-bgHome text-white p-5 items-center justify-between">
            <h1 className="text-4xl font-semibold">
                {getPageName(pathname)}
            </h1>

            <div className="flex items-center gap-4 w-auto">
                <InputSearch placeholder="Procurar" icon={MagnifyingGlass} />
                <div className="relative bg-sidebarblue p-2 rounded-full cursor-pointer">
                    <Bell size={22} className="text-white" />
                    {notificationsCount > 0 && (
                        <div className="absolute top-0 right-0 bg-gradientBlue text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                            {notificationsCount}
                        </div>
                    )}
                </div>
                <Image src={IconUser} alt="IconUser" className="text-white w-9 h-9 cursor-pointer" />
            </div>
        </div>
    );
};
