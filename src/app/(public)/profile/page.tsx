"use client";

import { CardCertificate } from "@/components/CardCertificate";
import { CardEnterprise } from "@/components/CardEnterprise";
import { CardInsigna } from "@/components/CardInsigna";
import { CardProfile } from "@/components/CardProfile";
import { useProfileUser } from "@/hooks/useProfileUser";
import { Buildings, Scroll, Star } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: user, isLoading, error } = useProfileUser();

  const insignias = [
    { image: "/insign1.png", name: "Jornada Equity I" },
    { image: "/insign2.png", name: "Jornada Equity II" },
    { image: "/insign3.png", name: "Jornada Equity III" },
    { image: "/insign4.png", name: "Jornada Equity IV" }
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar o usuário</div>;

  return (
    <div className="mx-auto py-5 flex flex-col gap-8 max-w-screen-lg px-4 sm:px-6 lg:px-8">
      {user && (
        <CardProfile
          name={user.name}
          avatar={user.avatar}
          area={user.area}
          role={user.role}
          wallpaper={user.wallpaper}
          contact={user.contact}
          address={user.address}
          enterprise={user.enterprise}
          tags={user.tags}
        />
      )}

      <div>
        <div className="flex items-center gap-2">
          <Star size={32} color="#ffff" weight="fill" />
          <h1 className="text-white text-2xl sm:text-3xl">Insígnias</h1>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
          {insignias.map((insigna, index) => (
            <CardInsigna
              key={index}
              imageInsigna={insigna.image}
              nameInsigna={insigna.name}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Buildings size={32} color="#ffff" weight="fill" />
          <h1 className="text-white text-2xl sm:text-3xl">Empresas</h1>
        </div>
        <div className="mt-4">
          {user && user.enterprise && (
            <CardEnterprise
              nameEnterprise={user?.enterprise?.name}
              descriptionEnterprise={user?.enterprise?.description}
              imageEnterprise={user?.enterprise?.image}
              infoEnterprise={user?.enterprise?.infoEnterprise}
            />
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Scroll size={32} color="#ffff" weight="fill" />
          <h1 className="text-white text-2xl sm:text-3xl">Certificados</h1>
        </div>
        <div className="mt-4">
          {user && user.certificate && (
            <CardCertificate
              nameCertificate={user?.certificate?.name}
              descriptionCertificate={user?.certificate?.description}
              imageCertificate={user?.certificate?.image}
            />
          )}
        </div>
      </div>
    </div>
  );
}
