"use client"

import { Avatar, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import IconCheck from "@public/IconCheckVased.svg";
import PostImage from "@public/postImage.png";
import IconUser from "@public/user.png";
import React from "react";

export const CardPost: React.FC = () => {
    return (
        <Card className="p-4 bg-primary rounded-2xl max-w-max">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <div className="flex w-full items-center gap-2">
                    <Avatar size="md" src={IconUser.src} />
                    <div>
                        <div className="flex flex-row items-center gap-2">
                            <p className="text-white font-semibold text-sm">Joaquim Arquino</p>
                            <Image src={IconCheck.src} alt="IconUser" className="w-4 h-4" />
                            <p className="text-white font-thin text-xs">1h atrás</p>
                        </div>

                        <p className="font-light text-white text-xs">
                            Co-Founder AMBEV
                        </p>
                    </div>

                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex flex-col gap-3">
                <p className="font-light text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur. Aenean ut sed in at venenatis pulvinar lorem gravida. Felis vestibulum et tincidunt eget ac sed ultricies elit. Urna netus ullamcorper risus tortor dictum molestie semper varius sit.
                </p>
                <Image
                    alt="Card post"
                    className="object-cover rounded-xl"
                    src={PostImage.src}
                    width={900}
                />
            </CardBody>
        </Card>
    );
}
