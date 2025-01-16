"use client";

import { Chip } from "@nextui-org/react";
import React from "react";

interface ChipProps {
    title: string
    amount?: number
}

export const ChipFilter: React.FC<ChipProps> = ({ title, amount }) => {
    return (
        <Chip
            color="primary"
            size="lg"
            classNames={
                {
                    content: "flex flex-row gap-2 items-center p-3"
                }
            }
        >
            <p className="text-white font-light">{title}</p>
            {amount && (
                <div className="flex items-center justify-center p-2 bg-emphasis rounded-full w-6 h-6">
                    <p className="text-white text-xs font-semibold">{amount}</p>
                </div>
            )}
        </Chip>
    );
}
