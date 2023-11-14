import { FC } from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  value: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  label,
  src,
  width,
  height,
  alt,
  id,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="relative h-12">
      <input
        type="text"
        id={id}
        name={name}
        autoComplete="off"
        value={value}
        placeholder=" "
        required
        onChange={onChange}
        className="bg-loginInputColor input absolute left-0 top-0 h-full w-full rounded-[10px] border-2 border-transparent px-4 py-2 outline-none transition duration-200"
      />
      <label
        htmlFor={id}
        className="input-text absolute left-4 top-3 bg-opacity-0 transition duration-200"
      >
        <Image
          src={src}
          width={width}
          height={height}
          className="mr-4 inline-block align-middle"
          alt={alt}
        />
        <span className="align-middle font-bold">{label}</span>
      </label>
    </div>
  );
};

export default Input;
