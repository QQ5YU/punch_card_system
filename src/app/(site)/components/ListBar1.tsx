import List1 from "../components/List1";
import Image from "next/image";

export default function ListBar1() {
    return (
        <div className="">
            <div className="grid grid-cols-[minmax(250px,_1.5fr)_repeat(4,_1fr)_100px] px-8 py-5 bg-[#FAFBFB]">
                <div className="relative">
                    <label className="text-gray-600 ml-10">
                        <input type="checkbox" className="absolute left-0 appearance-none w-6 h-6 border-gray-400 border rounded-md
                        checked:bg-[url('/images/employeeManagement/tick.svg')]" />
                            姓名/員工編號
                    </label>
                </div>
                <label className="text-gray-600">
                    部門/職位
                </label>
                <label className="text-gray-600">
                    團隊
                </label>
                <label className="text-gray-600">
                    聯絡方式
                </label>
                <label className="text-gray-600">
                    類型
                </label>
            </div>
                <div className="col-start-1 col-end-7">
                    <List1
                        account="Single Account"
                        id="123456789"
                        department="XXXXXXXXXX"
                        position="主管"
                        team="XXXX團隊"
                        phone="09123456789"
                        type="全職"
                        />
                </div>
                <div className="col-start-1 col-end-7">
                    <List1
                        account="Single Account"
                        id="123456789"
                        department="XXXXXXXXXX"
                        position="主管"
                        team="XXXX團隊"
                        phone="09123456789"
                        type="全職"
                        is_="bg-[#FAFBFB]"
                    />
                </div>
        </div>
    )
}