import { FC, useState } from "react";
import Image from "next/image";
import Button from "./SiteButton";

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
            <div className={`${ButtonPop ? "z-1 fixed flex-col bg-gray-200 w-[70%] h-[75%] top-[15%] left-[20%] rounded-[35px]" : "hidden"}`}>
                <div className="flex justify-between bg-[#F5F6F7]">
                    <p>新增員工</p>
                    <p onClick={() => setButtonPop(false)}>X</p>
                </div>
                <div className="flex">
                    <div className="w-[30%]">
                        <div className="w-20 h-20 rounded-full bg-gray-400"></div>
                    </div>
                    <div className="w-[70%] grid grid-cols-3">
                        <div className="flex-col">
                            <p>姓名</p>
                            <p>EX. 王曉明</p>
                        </div>
                        <div className="flex-col">
                            <p>員工編號</p>
                            <p>EX. 123456789</p>
                        </div>
                        <div className="flex-col">
                            <p>密碼</p>
                            <p>EX. XXXXXXX</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button
                        text="取消"
                        type="submit"
                        src=""
                        alt=""
                        inputClassName="bg-white"
                    />
                    <Button
                        text="儲存"
                        type="submit"
                        src=""
                        alt=""
                        inputClassName="bg-darkBlue text-white"
                />
                </div>
            </div>
        </div>
    )
}

export default Modal;
