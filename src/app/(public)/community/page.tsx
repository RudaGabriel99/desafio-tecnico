"use client";

import { CardPost } from "@/components/CardPost";
import { CardReference } from "@/components/CardReference";
import { ChipFilter } from "@/components/ChipFilter";
import PostInput from "@/components/PostInput";
import { Usecommunity } from "@/hooks/useCommunity";
import IconUser from "@public/user.png";
import { PaperPlaneRight } from "phosphor-react";

const tropics = [
  { title: "Empresas", amount: 12 },
  { title: "Ações", amount: 8 },
  { title: "Marketing", amount: 15 },
  { title: "Livros", amount: 5 },
  { title: "Design", amount: 9 },
  { title: "Investimentos", amount: 20 },
  { title: "Tecnologia", amount: 18 },
];

export default function Community() {
  const { data: posts, isLoading, error } = Usecommunity();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os posts</div>;

  return (
    <div className="mx-auto py-5 flex flex-col lg:flex-row gap-5 max-w-screen-lg px-4">
      <div className="flex flex-col gap-5 flex-1">

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {tropics.map((topic, index) => (
            <ChipFilter key={index} title={topic.title} amount={topic.amount} />
          ))}
        </div>

        <PostInput icon={PaperPlaneRight} userImage={IconUser.src} />

        {posts?.map((post) => (
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

      <div className="flex w-full lg:max-w-xs bg-primary p-4 rounded-xl h-max flex-col gap-5">
        <p className="text-white text-sm text-center lg:text-left">
          Referências do setor
        </p>
        <CardReference />
      </div>
    </div>
  );
}
