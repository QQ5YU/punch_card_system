import { FC } from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  inputClassName?: string;
  onClick?: () => void;
  src: string;
  alt: string;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  inputClassName,
  onClick,
  src,
  alt,
}) => {
  return (
    <div className="pt-3">  
      <span className={`${src == "" ? "hidden" : "absolute pt-2.5 pl-4"}`}>
        <Image src={src} alt={alt} width={25} height={25} />
      </span>
      <button
        type={type}
        className={`${src == "" ? "pl-5" : "pl-12"} pr-5 py-3 outline outline-2 outline-gray-200 rounded-full ${inputClassName}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
