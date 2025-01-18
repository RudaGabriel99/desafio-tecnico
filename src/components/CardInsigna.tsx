"use client"

import { Card, CardHeader, Image } from "@nextui-org/react";

interface InsignaProps {
    nameInsigna: string
    imageInsigna: string
}

export const CardInsigna: React.FC<InsignaProps> = ({
    nameInsigna,
    imageInsigna,
}) => {
    return (
        <Card className="bg-emphasis">
            <CardHeader className="flex flex-col w-[220px] gap-5">
                <Image src={imageInsigna} alt="IconUser" className="w-28 h-28" />
                <h1>{nameInsigna}</h1>
            </CardHeader>
        </Card>
    )
}