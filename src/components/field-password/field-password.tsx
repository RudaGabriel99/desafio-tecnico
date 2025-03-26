import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { InputProps } from "@heroui/react";

import { Field } from "../field/field";

export const FieldPassword = (props: InputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Field
      {...props}
      endContent={
        <button type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <Icon
              className="pointer-events-none text-2xl text-default-400"
              icon="solar:eye-closed-linear"
            />
          ) : (
            <Icon
              className="pointer-events-none text-2xl text-default-400"
              icon="solar:eye-bold"
            />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};
