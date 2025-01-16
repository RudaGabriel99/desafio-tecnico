"use client";

import { Avatar, Button, Input } from "@nextui-org/react";
import { PaperPlaneRight } from "phosphor-react";

export default function PostInput({
    userImage,
    placeholder = "O que você deseja publicar?",
    onSend,
    ...props
}: {
    userImage: string;
    placeholder?: string;
    onSend?: () => void;
}) {
    return (
        <div className="items-center bg-primary py-2 rounded-3xl w-full">
            <Input
                color="secondary"
                placeholder={placeholder}
                {...props}
                startContent={
                    <Avatar size="md" src={userImage} />
                }
                endContent={
                    <Button radius="full" color="secondary" onPress={onSend} >
                        <PaperPlaneRight size={22} className="text-white" />
                    </Button>
                }
            />
        </div>
    );
}
