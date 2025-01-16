"use client"

import { Avatar, Card, CardBody, Image } from "@nextui-org/react";
import IconCheck from "@public/iconCheck.png";
import IconUser from "@public/user.png";

export const CardReference: React.FC = () => {
    return (
        <Card className="bg-emphasis">
            <CardBody className="flex flex-row gap-2">
                <Avatar size="md" src={IconUser.src} />
                <div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-white font-semibold text-sm">Joaquim Arquino</p>
                        <Image src={IconCheck.src} alt="IconUser" className="w-4 h-4" />
                    </div>

                    <p className="font-light text-white text-xs">
                        Co-Founder AMBEV
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}