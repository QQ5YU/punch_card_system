import { FC } from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
}

const Button: FC<ButtonProps> = ({ text, type }) => {
  return (
    <button
      className="w-full h-12 mt-[71px] rounded-[10px] border-2 border-transparent bg-buttonBlue font-bold text-white transition duration-[.3s] ease hover:bg-white hover:text-buttonBlue hover:border-buttonBlue"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
