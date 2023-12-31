import { FC } from "react";
import Image from "next/image";
import Modal from "./EditModal";

interface ListProps {
    account: string;
    id: string;
    department: string;
    position: string;
    team: string;
    phone: string;
    time: string;
    type: string;
    is_late: boolean;
    is_?: boolean;
    pth: string;
}

const List: FC<ListProps> = ({
    account,
    id,
    department,
    position,
    team,
    phone,
    time,
    type,
    is_late,
    is_,
    pth,
}) => {
    const late = is_late ? "遲到" : "準時";
    return (
        <div className={`grid grid-cols-[minmax(250px,_1.5fr)_repeat(4,_1fr)_100px] px-8 py-5 outline outline-2 outline-gray-100 ${is_ ? "bg-[#FAFBFB]" : null}`}>
            <div className="flex">
                <input aria-label="none" type="checkbox" className="appearance-none self-center w-6 h-6 border-gray-400 border rounded-md
                checked:bg-[url('/images/employeeManagement/tick.svg')]" />
                <Image
                    src="/images/employeeManagement/indexICON.svg"
                    alt="index icon"
                    width={25}
                    height={25}
                    className="rounded-full mx-4 bg-gray-200 h-14 w-14 p-4"
                ></Image>
                <div className="self-center">
                    <p>{account}</p>
                    <p>{id}</p>
                </div>
            </div>
            <div className="self-center">
                <p>{department}</p>
                <p>{position}</p>
            </div>
            <div className={`${pth == "/employeeManagement" ? "self-center" : "hidden"}`}>
                <p>{team}</p>
            </div>
            <div className="self-center">
                <p>{phone}</p>
            </div>
            <div className={`${pth == "/recordManagement" ? "self-center" : "hidden"}`}>
                <p>{time}</p>
            </div>
            <div className={`${pth == "/employeeManagement" ? "self-center" : "hidden"}`}>
                <p>{type}</p>
            </div>
            <div className={`${pth == "/recordManagement" ? "self-center" : "hidden"} ${is_late ? "text-red-500" : ""}`}>
                <p>{late}</p>
            </div>
            <div className="flex space-x-5">
                <Image
                    src="/images/employeeManagement/download.svg"
                    alt="download icon"
                    width={25}
                    height={25}
                />
                {/* <Image
                    src="/images/employeeManagement/edit.svg"
                    alt="edit icon"
                    width={25}
                    height={25}
                /> */}
                <Modal
                    src="/images/employeeManagement/edit.svg"
                    alt="edit icon"
                    pth={pth}
                />
                <Image
                    src="/images/employeeManagement/delete.svg"
                    alt="delete icon"
                    width={25}
                    height={25}
                />
            </div>
        </div>
    )
}

export default List;
