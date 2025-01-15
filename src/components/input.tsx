import { Input } from "@nextui-org/react";
import { ElementType } from "react";

export default function InputSearch({
    icon: Icon,
    placeholder = "Digite aqui...",
    ...props
}: {
    icon?: ElementType;
    label?: string;
    placeholder?: string;
}) {
    return (
        <div className="flex flex-row bg-sidebarblue px-3 py-2 rounded-full">
            {Icon ? (
                <div className="flex items-center justify-center w-6 h-6 mr-2">
                    <Icon className="w-full h-full text-white" />
                </div>
            ) : null}
            <Input
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}
