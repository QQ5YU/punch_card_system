import { FC } from "react";
import Image from "next/image";

interface InputProps {
  onClick?: () => void;
  onMouseLeave?: () => void;
  inputClassName?: string;
  readOnly?: boolean;
  inputType: "text";
  id: string;
  name: string;
  placeholder: string;
  buttonType: "submit" | "button";
  src: string;
  alt: string;
}

const Input: FC<InputProps> = ({
  onClick,
  inputType,
  id,
  name,
  placeholder,
  readOnly,
  inputClassName,
  buttonType,
  src,
  alt,
}) => {
  const inputProps = {
    readOnly: readOnly ? true : undefined,
  };

  return (
    <div className="relative mt-6 ml-1">
      <input
        className={`border-transparent rounded-[10px] w-[38%] min-w-[390px] max-w-[420px] h-12 px-7 outline outline-2 outline-gray-200  ${inputClassName}`}
        type={inputType}
        id={id}
        onClick={onClick}
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
      <span className="absolute  w-[22px] h-[22px] pointer-events-none top-[14px] right-7">
        <button
          type={buttonType}
          title="button"
          className="border-none bg-transparent"
        >
          <Image src={src} alt={alt} width={25} height={25} />
        </button>
      </span>
    </div>
  );
};

export default Input;
