"use client";

import { Avatar, Button, Card, CardBody, CardHeader, Image, Input } from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChatTeardropDots, Heart, ShareNetwork } from "phosphor-react";
import React, { useEffect, useState } from "react";

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
    const formattedDate = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
        locale: ptBR,
    });

    const [isMounted, setIsMounted] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);

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
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Heart size={25} />
                            <p className="text-xs lg:text-sm">{likes} likes</p>
                        </div>
                        <div
                            className="flex items-center gap-2 cursor-pointer "
                            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
                        >
                            <ChatTeardropDots size={25} />
                            <p className="text-xs lg:text-sm">{comments} comments</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <ShareNetwork size={25} />
                            <p className="text-xs lg:text-sm">{shares} shares</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className={`mt-auto pt-3 transition-all duration-300 ${isCommentsOpen ? "h-auto" : "h-0 overflow-hidden"}`}>
                {isCommentsOpen && (
                    <div className="flex flex-col gap-3">
                        {commentsData.map((comment, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <Avatar size="sm" src={comment.userAvatar} />
                                <div>
                                    <p className="text-sm font-semibold">{comment.userName}</p>
                                    <p className="text-xs text-gray-300">{comment.comment}</p>
                                    <p className="text-xs text-gray-500">{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: ptBR })}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex items-center gap-2 mt-3">
                            <Avatar size="sm" src={userAvatar} />
                            <Input
                                className="flex-1"
                                placeholder="Adicione um comentário..."
                                size="sm"
                            />
                            <Button size="sm" variant="flat" color="secondary">
                                Comentar
                            </Button>
                        </div>
                    </div>
                )}
            </CardBody>
        </Card>
    );
};
