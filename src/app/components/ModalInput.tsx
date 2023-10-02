import { FC } from "react";

interface Props {
    title: string;
    placeholder?: string;
    classNmae?: string;
}

const Inner: FC<Props> = ({
    title,
    placeholder,
    classNmae,
}) => {
    return (
        <div className={`flex-col ${classNmae}`}>
            <p>{title}</p>
            <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder={placeholder}></input>
            <div className="block bg-gray-500 w-full h-px"></div>
        </div>
    )
}

export default Inner;
