"use client";

import { FieldPassword } from "@/components/field-password/field-password";
import { Field } from "@/components/field/field";
import { SignInFormData, signInSchema } from "@/types/sign-in-schema";
import { Button, Checkbox, Divider, Image, Link } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";
import { IconFacebook } from "../../../../public/IconFacebook";

export default function Page() {

  const methods = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <div
      className="flex h-full min-h-svh flex-col w-full items-center justify-center overflow-hidden rounded-small bg-[#161928] p-2 sm:p-4 lg:p-8"
    >
      <div className="py-20">
        <Image
          className=" h-20 sm:w-32 sm:h-32 lg:w-auto lg:h-26"
          src="/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="flex gap-2">
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={20} />}
          variant="solid"
          className="flex items-center gap-2 bg-white hover:bg-gray-200 border
           border-blue-500 text-blue-500 font-semibold p-2 px-4 rounded-lg 
           transition-colors duration-300 text-sm"
        >
          Logar com o google
        </Button>
        <Button
          startContent={<IconFacebook width={20} />}
          variant="solid"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 
             text-white font-semibold p-2 px-3 rounded-lg 
             transition-colors duration-300 text-sm"
        >
          Logar com o Facebook
        </Button>
      </div>


      <div className="flex w-full relative max-w-lg flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">Ou</p>
          <Divider className="flex-1" />
        </div>

        <p className="text-xl font-medium">Login</p>
        <form
          className="flex flex-col gap-3"
        // onSubmit={methods.handleSubmit(onSignIn)}
        >
          <Controller
            control={methods.control}
            name="email"
            render={({ field, fieldState: { error } }) => (
              <Field
                {...field}
                errorMessage={error?.message}
                name="email"
                placeholder="Seu e-mail"
                type="email"
              />
            )}
          />
          <p className="text-xl font-medium">Senha</p>
          <Controller
            control={methods.control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <FieldPassword
                {...field}
                autoComplete="password"
                errorMessage={error?.message}
                placeholder="Sua senha"
              />
            )}
          />
          <div className="flex items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Manter-me conectado
            </Checkbox>
            <Link className="text-default-500 underline" href="#" size="sm">
              Esqueceu a senha?
            </Link>
          </div>

          <div className="flex justify-center">
            <Button size="md" type="submit" className="w-full max-w-xs bg-[#571585]">
              Entrar
            </Button>
          </div>
        </form>

        <Link className="text-default-500 underline justify-center mt-5" href="#" size="sm">
          Esqueceu a senha?
        </Link>
      </div>
    </div >
  );
}