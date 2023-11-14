import { FC } from "react";
import { LuLoader2 } from "react-icons/lu";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ text, type, isLoading }) => {
  return (
    <button
      className="w-full h-12 mt-[71px] rounded-[10px] border-2 border-transparent bg-buttonBlue font-bold text-white transition duration-[.3s] ease hover:bg-white hover:text-buttonBlue hover:border-buttonBlue"
      type={type}
    >
      {isLoading ? (
        <LuLoader2 size={28} className="m-auto animate-spin" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
