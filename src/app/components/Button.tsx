import { FC } from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  inputClassName?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  inputClassName,
  onClick,
}) => {
  return (
    <button
        type={type}
        className={`px-5 py-3 outline outline-2 outline-gray-200 rounded-full ${inputClassName}`}
        onClick={onClick}
    >
        {text}
    </button>
  );
};

export default Button;
