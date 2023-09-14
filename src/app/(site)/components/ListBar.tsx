export default function ListBar() {
    return (
        <div className="flex space-x-44 bg-[#FAFBFB] px-8 py-4">
            <div className="relative">
                <label className="text-gray-600 ml-10">
                    <input type="checkbox" className="absolute left-0 appearance-none w-6 h-6 border-gray-400 border rounded-md
                    checked:bg-[url('/images/employeeManagement/tick.svg')]" />
                        姓名/員工編號
                </label>
            </div>
            <label>
                部門/職位
            </label>
            <label>
                團隊
            </label>
            <label>
                聯絡方式
            </label>
            <label>
                類型
            </label>
        </div>
    )
}