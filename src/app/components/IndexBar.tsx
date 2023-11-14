import Image from "next/image";
import Index from "../components/Index";

export default function IndexBar() {
    return (
        <div className="flex space-x-20 md:space-x-10 m-5">
            <Index name="姓名"/>
            <Index name="員工編號"/>
            <Index name="部門"/>
            <Index name="職位"/>
            {/* <Index name="團隊"/> */}
            <Index name="聯絡方式"/>
            <Index name="類型"/>
            <div className="flex space-x-2.5">
                <Image
                src="/images/employeeManagement/indexICON2.svg"
                alt="index icon"
                width={25}
                height={25}
                />
                <p>Filters</p>
                <Image className="pt-1" src="/images/header/profile.svg" width={15} height={15} alt="profile arrow"></Image>
            </div>
        </div>
    )
}