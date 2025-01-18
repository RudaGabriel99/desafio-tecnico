"use client"

import { Card, CardHeader, Image } from "@nextui-org/react";

interface CerificateProps {
    nameCertificate: string
    descriptionCertificate: string
    imageCertificate: string
}

export const CardCertificate: React.FC<CerificateProps> = ({
    nameCertificate,
    imageCertificate,
    descriptionCertificate
}) => {
    return (
        <Card className="bg-emphasis w-max px-5">
            <CardHeader className="flex flex-col w-[220px] gap-2">
                <Image src={imageCertificate} alt="IconUser" className="w-48 h-28" />
                <h1 className="text-xl">{nameCertificate}</h1>
                <p className="text-gray-400">{descriptionCertificate}</p>
            </CardHeader>
        </Card>
    )
}