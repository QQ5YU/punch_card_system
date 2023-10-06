import { FC } from "react";
import Button from "./SiteButton";
import Inner from "./ModalInput"

interface Props {
    is_open: boolean;
    setButtonPop: any;
}

const Modal: FC<Props> = ({
    is_open,
    setButtonPop,
}) => {
    return is_open? (
        <div className="flex z-10">
            <div className="flex fixed bg-[#ffffffaa] w-full h-full top-[0%] left-[15vw]">
                <div className="self-center bg-[#DCE6F1] w-[70%] h-[70%] overflow-y-scroll no-scrollbar rounded-[35px]">
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
                                <Inner title="姓名" placeholder="EX. 王曉明" />
                                <Inner title="員工編號" placeholder="EX. 123456789" />
                                <Inner title="密碼" placeholder="EX. *********" />
                                <Inner title="單位" placeholder="EX. XXX單位" />
                                <Inner title="部門" placeholder="EX. XXX部" />
                                <Inner title="職位" placeholder="EX. 主管" />
                                <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">聯絡資訊</p>
                                <Inner title="電子郵件" placeholder="EX. XXXXXX@addr.com" classNmae="col-start-1 col-end-3" />
                                <Inner title="手機號碼" placeholder="EX. 09123456789" />
                                <p className="col-start-1 col-end-4 text-darkBlue font-bold text-lg">團隊資訊</p>
                                <Inner title="主管" placeholder="EX. XXX" classNmae="col-start-1 col-end-3" />
                                <Inner title="團隊" placeholder="EX. XXX" classNmae="col-start-1 col-end-3" />
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
        </div>
    ) : (<></>)
}

export default Modal;
