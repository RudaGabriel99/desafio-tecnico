"use client";

import { Avatar } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useEffect, useState } from "react";

interface Comment {
    userName: string;
    userAvatar: string;
    createdAt: string;
    comment: string;
}

interface WrapperComentsProps {
    comments: Comment[];
    onResponse?: () => void
}

export const WrapperComents: React.FC<WrapperComentsProps> = ({ comments, onResponse }) => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {comments.map((comment, index) => {
                const formattedDate = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: ptBR });

                return (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex w-full items-center gap-2">
                            {isClient && <Avatar size="md" src={comment.userAvatar} />}
                            <div>
                                <div className="flex flex-row items-center gap-2">
                                    <p className="text-white font-semibold text-sm">{comment.userName}</p>
                                    <p className="text-gray-300 font-thin text-xs">{formattedDate}</p>
                                </div>
                            </div>
                        </div>
                        <p className="font-light text-white text-sm">{comment.comment}</p>
                        <p className="font-light text-gray-300 text-xs cursor-pointer" onClick={onResponse}>Responder</p>
                    </div>
                );
            })}
        </div>
    );
};
