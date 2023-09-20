import { FC, useState } from "react";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
}

const Modal: FC<Props> = ({
    src,
    alt,
}) => {
    const [ButtonPop, setButtonPop] = useState(false);
    console.log("ButtonPop: ", ButtonPop)
    return (
        <div className="flex">
            <div className="self-center" onClick={() => setButtonPop(true)}>
                <Image src={src} alt={alt} width={25} height={25} />
            </div>
            <div className={`${ButtonPop ? "z-1 fixed flex bg-gray-200 w-[70%] h-[75%] top-[15%] left-[20%] rounded-[35px]" : "hidden"}`}>
                <p onClick={() => setButtonPop(false)}>X</p>
            </div>
        </div>
    )
}

export default Modal;
