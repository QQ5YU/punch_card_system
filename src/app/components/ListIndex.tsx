import { FC } from "react";

interface IndexProps {
    account: string;
    department: string;
    team: string;
    phone: string;
    time: string;
    type: string;
    pth: string;
}

const Index: FC<IndexProps> = ({
    account,
    department,
    team,
    phone,
    time,
    type,
    pth,
}) => {
    return (
        <div className="grid grid-cols-[minmax(250px,_1.5fr)_repeat(4,_1fr)_100px] px-8 py-5 bg-[#FAFBFB]">
            <div className="relative">
                <label className="text-gray-600 ml-10">
                    <input type="checkbox" className="absolute left-0 appearance-none w-6 h-6 border border-gray-400 hover:border-checkedPurple rounded-md
                    checked:bg-[url('/images/employeeManagement/tick.svg')] text-checkedPurple" />
                        {account}
                </label>
            </div>
            <label className="text-gray-600">
                {department}
            </label>
            <label className={`${pth == "/employeeManagement" ? "text-gray-600" : "hidden"}`}>
                {team}
            </label>
            <label className="text-gray-600">
                {phone}
            </label>
            <label className={`${pth == "/recordManagement" ? "text-gray-600" : "hidden"}`}>
                {time}
            </label>
            <label className="text-gray-600">
                {type}
            </label>
        </div>
    )
}

export default Index;
