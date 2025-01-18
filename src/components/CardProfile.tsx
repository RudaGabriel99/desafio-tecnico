"use client";

import { TUser } from "@/types/user";
import { Avatar, Button, Card, CardBody, CardHeader, Chip, Image, Spacer } from "@nextui-org/react";
import IconCheck from "@public/iconCheck.png";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { CardEnterprise } from "./CardEnterprise";

export const CardProfile: React.FC<TUser> = ({
    name,
    avatar,
    wallpaper,
    area,
    role,
    contact,
    address,
    tags = [],
    enterprise,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Card className="p-4 bg-primary rounded-2xl overflow-hidden max-w-full">
            <CardHeader className="flex flex-col gap-3">
                <div className="relative w-full h-[200px] sm:h-[300px] bg-gray-300">
                    <Image
                        src={wallpaper}
                        alt="User Wallpaper"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-8 transform translate-y-1/2">
                        <Avatar
                            src={avatar}
                            className="ring-4 ring-primary bg-white w-20 h-20 sm:w-28 sm:h-28"
                        />
                    </div>
                </div>
            </CardHeader>

            <CardBody className="pt-10 flex flex-col md:flex-row md:pt-16 justify-between gap-6 ">
                <div className="flex-1">
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="font-semibold text-2xl sm:text-3xl">{name}</h1>
                        <Image src={IconCheck.src} alt="IconUser" className="w-4 h-4" />
                    </div>
                    <Spacer x={4} />
                    <p className="text-base sm:text-lg text-blue-500">{area}</p>
                    <p className="text-sm sm:text-base text-white">{role}</p>
                    <p className="text-sm sm:text-base text-gray-400">{address}</p>
                    <p className="text-sm sm:text-base text-blue-500">{contact}</p>
                </div>

                <div className="flex-1">
                    <p className="text-lg text-gray-400">Empresa</p>
                    {enterprise ? (
                        <CardEnterprise
                            nameEnterprise={enterprise.name}
                            descriptionEnterprise={enterprise.description}
                            imageEnterprise={enterprise.image}
                            Icon
                        />
                    ) : (
                        <p className="text-sm text-gray-500">Sem informações da empresa</p>
                    )}
                </div>
            </CardBody>

            <CardBody className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <InstagramLogo size={28} className="text-gray-400" />
                        <FacebookLogo size={28} className="text-gray-400" />
                        <YoutubeLogo size={28} className="text-gray-400" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button radius="full" color="secondary" className="w-full md:w-auto">
                            Editar Perfil
                        </Button>
                        <Button radius="full" className="bg-emphasis text-white w-full md:w-auto">
                            Configurações
                        </Button>
                    </div>
                </div>


                {tags.length > 0 && (
                    <div className="">
                        <p className="text-lg text-gray-400 mb-2">Tags:</p>
                        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3">
                            {tags.map((tag, index) => (
                                <Chip key={index} size="lg" className="w-full text-center">
                                    {tag}
                                </Chip>
                            ))}
                        </div>
                    </div>
                )}
            </CardBody>
        </Card>
    );
};
