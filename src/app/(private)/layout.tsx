"use client";

import { Sidebar } from "@/components/sidebar";
import {
    cn
} from "@heroui/react";
import { PropsWithChildren } from "react";


const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex  grow w-screen ">
            <Sidebar />
            <div
                className={cn([
                    "grow flex flex-col p-8 gap-6"
                ])}
            >
                <main className="flex flex-col grow">{children}</main>
            </div>
        </div>
    );
};
export default MainLayout;
