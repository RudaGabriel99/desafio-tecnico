"use client";

import { Avatar, Button, Input } from "@nextui-org/react";
import { ElementType } from "react";

export default function PostInput({
    userImage,
    placeholder = "O que você deseja publicar?",
    onSend,
    icon: Icon,
    color = "primary",
    ...props
}: {
    userImage?: string;
    icon?: ElementType;
    color?: "primary" | "emphasis";
    placeholder?: string;
    onSend?: () => void;
}) {
    return (
        <div
            className={`items-center py-2 rounded-3xl w-full ${color === "primary" ? "bg-primary" : "bg-emphasis"
                }`}
        >
            <Input
                color="secondary"
                placeholder={placeholder}
                {...props}
                startContent={
                    userImage && (
                        <Avatar size="md" src={userImage} />
                    )
                }
                endContent={
                    Icon && (
                        <Button radius="full" color="secondary" onPress={onSend}>
                            <Icon className="w-full h-full text-white" />
                        </Button>
                    )
                }
            />
        </div>
    );
}
