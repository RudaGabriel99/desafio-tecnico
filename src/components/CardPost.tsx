"use client";

import { Avatar, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChatTeardropDots, Heart, ShareNetwork } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { WrapperComents } from "./WrapperComents";


interface CardPostProps {
    id?: number;
    body: string;
    userName: string;
    userAvatar: string;
    userRole: string;
    createdAt: string;
    likes: number;
    comments: number;
    shares: number;
    commentsData?: Array<{
        userName: string;
        userAvatar: string;
        createdAt: string;
        comment: string;
    }>;
    postImage?: string;
}

export const CardPost: React.FC<CardPostProps> = ({
    body,
    userName,
    userAvatar,
    userRole,
    createdAt,
    likes,
    comments,
    shares,
    commentsData = [],
    postImage,
}) => {
    const formattedDate = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: ptBR });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Card className="p-4 bg-primary rounded-2xl">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <div className="flex w-full items-center gap-2">
                    <Avatar size="md" src={userAvatar} />
                    <div>
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-semibold text-sm">{userName}</p>
                            <p className="text-gray-300 font-thin text-xs">{formattedDate}</p>
                        </div>
                        <p className="font-semibold text-xs">{userRole}</p>
                    </div>
                </div>
                <div className="w-full overflow-visible py-2 flex flex-col gap-3">
                    <p className="font-light text-sm">{body}</p>
                    {postImage && (
                        <Image
                            alt="Card post"
                            className="object-cover rounded-xl"
                            src={postImage}
                            width={900}
                        />
                    )}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Heart size={30} />
                            <p>{likes} Curtidas</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ChatTeardropDots size={30} />
                            <p>{comments} Comentários</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShareNetwork size={30} />
                            <p>{shares} Compartilhamentos</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="mt-auto pt-3 border-t border-gray-700">
                <WrapperComents comments={commentsData} />
            </CardBody>
        </Card>
    );
};
