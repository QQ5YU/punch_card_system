import { FC, useState } from "react";
import Image from "next/image";
import Button from "./SiteButton";
import Inner from "./ModalInput"

interface Props {
    src: string;
    alt: string;
    pth: string;
}

const Modal: FC<Props> = ({
    src,
    alt,
    pth,
}) => {
    const [ButtonPop, setButtonPop] = useState(false);
    return (
        <div className="flex">
            <div className="self-center" onClick={() => setButtonPop(true)}>
                <Image src={src} alt={alt} width={25} height={25} />
            </div>
            <div className={`${ButtonPop ? "grid grid-cols-[5%_60%_1fr] fixed bg-[#ffffffaa] w-full h-full top-[0%] left-[15vw]" : "hidden"}`}>
                <div className="self-center col-start-2 bg-[#DCE6F1] w-full h-[70%] overflow-y-scroll no-scrollbar rounded-[35px]">
                    <div className="flex justify-between rounded-t-[35px] bg-[#F5F6F7] py-3 pl-16 pr-6 self-center">
                        <p className={`${pth == "/employeeManagement" ? "font-bold text-darkBlue" : "hidden"}`}>編輯員工資料</p>
                        <p className={`${pth == "/recordManagement" ? "font-bold text-darkBlue" : "hidden"}`}>修改打卡紀錄</p>
                        <p className="bg-red-500 rounded-full px-1.5 text-white" onClick={() => setButtonPop(false)}>X</p>
                    </div>
                    <div className="mx-16 my-5">
                        <div className="flex">
                            <div className="w-[10%]">
                                <div className="w-20 h-20 rounded-full bg-gray-400"></div>
                            </div>
                            <div className="w-[90%] grid grid-cols-3 gap-x-10 gap-y-4 content-center">
                                <Inner title="姓名" placeholder="EX. 王曉明" />
                                <Inner title="員工編號" placeholder="EX. 123456789" />
                                <Inner title="密碼" placeholder="EX. *********" />
                                <Inner title="單位" placeholder="EX. XXX單位" />
                                <Inner title="部門" placeholder="EX. XXX部" />
                                <Inner title="職位" placeholder="EX. 主管" />
                                <div className={`${pth == "/employeeManagement" ? "col-start-1 col-end-4 grid grid-cols-3 gap-x-10 gap-y-4" : "hidden"}`}>
                                    <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">聯絡資訊</p>
                                    <Inner title="電子郵件" placeholder="EX. XXXXXX@addr.com" classNmae="col-start-1 col-end-3" />
                                    <Inner title="手機號碼" placeholder="EX. 09123456789" />
                                    <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">團隊資訊</p>
                                    <Inner title="主管" placeholder="EX. XXX" classNmae="col-start-1 col-end-3" />
                                    <Inner title="團隊" placeholder="EX. XXX" classNmae="col-start-1 col-end-3" />
                                </div>
                                <div className={`${pth == "/recordManagement" ? "col-start-1 col-end-4 flex-col space-y-4" : "hidden"}`}>
                                    <p className="text-darkBlue font-bold text-lg">打卡資訊</p>
                                    <Inner title="地點" placeholder="EX. 高雄市燕巢區大學路1號" />
                                    <Inner title="日期/時間" placeholder="EX. 2023/7/17 8:00" />
                                    <Inner title="打卡類型" placeholder="EX. 正常上班" />
                                    <Inner title="照片" placeholder="EX. 照片" />
                                    <Inner title="備註" placeholder="EX. XXX" />
                                </div>
                                <div className="col-start-1 col-end-4 flex mt-5 space-x-1 justify-end self-end">
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
                </div>
            </div>
        </div>
    )
}

export default Modal;
