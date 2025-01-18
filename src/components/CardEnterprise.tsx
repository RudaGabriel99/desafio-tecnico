"use client"

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Export } from "phosphor-react";

interface EnterpriseProps {
    nameEnterprise: string
    descriptionEnterprise: string
    imageEnterprise: string
    Icon?: boolean
    infoEnterprise?: string
}

export const CardEnterprise: React.FC<EnterpriseProps> = ({
    nameEnterprise,
    descriptionEnterprise,
    imageEnterprise,
    Icon,
    infoEnterprise
}) => {
    return (
        <Card className="bg-emphasis flex flex-col max-w-[500px] gap-1">
            <CardHeader className="flex flex-col gap-2 md:gap-5 md:flex-row">
                <Image src={imageEnterprise} alt="IconUser" className="w-14 h-14" />
                <div className="flex flex-col">
                    <h1>{nameEnterprise}</h1>
                    <h1 className="text-gray-400">{descriptionEnterprise}</h1>
                </div>
                {Icon && (
                    <Export size={32} />
                )}
            </CardHeader>
            {infoEnterprise && (
                <CardBody >
                    <h1>{infoEnterprise}</h1>
                </CardBody>
            )}
        </Card>
    )
}