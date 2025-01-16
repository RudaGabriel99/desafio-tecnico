"use client"

import { CardPost } from "@/components/CardPost";
import { CardReference } from "@/components/CardReference";
import { ChipFilter } from "@/components/ChipFilter";
import PostInput from "@/components/PostInput";
import { Usecommunity } from "@/hooks/useCommunity";
import IconUser from "@public/user.png";
import { PaperPlaneRight } from "phosphor-react";

const tropics = [
  "Empresas",
  "Ações",
  "Marketing",
  "Livros",
  "Design",
  "Investimentos",
  "Tecnologia"
];

export default function Community() {
  const { data: posts, isLoading, error } = Usecommunity();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os posts</div>;

  return (
    <div className="mx-auto py-5 flex flex-row gap-5 max-w-screen-xl px-4">
      <div className="flex max-w-screen-lg flex-col gap-5 flex-1">
        <div className="flex flex-wrap gap-3">
          {tropics.map((title, index) => (
            <ChipFilter key={index} title={title} amount={3} />
          ))}
        </div>
        <PostInput icon={PaperPlaneRight} userImage={IconUser.src} />

        {posts?.map(post => (
          <CardPost
            key={post.id}
            userName={post.user.name}
            userAvatar={post.user.avatar}
            userRole={post.user.role}
            createdAt={post.postedAt}
            postImage={post.content.image || ""}
            body={post.content.text}
            likes={post.stats.likes}
            comments={post.stats.comments}
            shares={post.stats.shares}
            commentsData={post.comments || []}
          />
        ))}
      </div>

      <div className="flex w-full max-w-xs bg-primary p-4 rounded-xl h-max flex-col gap-5">
        <p className="text-white text-sm">Referências do setor</p>
        <CardReference />
      </div>
    </div>
  );
}
