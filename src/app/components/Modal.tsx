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
            <div className={`${ButtonPop ? "fixed flex-col bg-[#DCE6F1] w-[70%] top-[15%] left-[20%] rounded-[35px]" : "hidden"}`}>
                <div className="flex justify-between rounded-t-[35px] bg-[#F5F6F7] py-3 pl-16 pr-6 self-center">
                    <p className="font-bold text-darkBlue">新增員工</p>
                    <p className="bg-red-500 rounded-full px-1.5 text-white" onClick={() => setButtonPop(false)}>X</p>
                </div>
                <div className="mx-16 my-5">
                    <div className="flex">
                        <div className="w-[10%]">
                            <div className="w-20 h-20 rounded-full bg-gray-400"></div>
                        </div>
                        <div className="w-[90%] grid grid-cols-3 gap-x-10 gap-y-4 content-center">
                            <div className="flex-col">
                                <p>姓名</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. 王曉明"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>員工編號</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. 123456789"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>密碼</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. *******"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>單位</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. XXX單位"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>部門</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. XXX部"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>單位</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. 主管"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">聯絡資訊</p>
                            <div className="flex-col col-start-1 col-end-3 ">
                                <p>電子郵件</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. XXXXXXXX@addr.com"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col">
                                <p>手機號碼</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. 09123456789"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">團隊資訊</p>
                            <div className="flex-col col-start-1 col-end-3 ">
                                <p>主管</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. XXX"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                            <div className="flex-col col-start-1 col-end-3 ">
                                <p>團隊</p>
                                <input className="w-full bg-[#DCE6F1]" aria-label="none" type="text" placeholder="EX. XXX"></input>
                                <div className="block bg-gray-500 w-full h-px"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5 space-x-1 justify-end self-end">
                        <Button
                            text="取消"
                            type="submit"
                            src=""
                            alt=""
                            inputClassName="bg-white"
                            onClick={() => setButtonPop(false)}
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
        </div>
    )
}

export default Modal;
