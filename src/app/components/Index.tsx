import { FC } from "react";
import Image from "next/image";

interface IndexProps {
    name: string;
}

const Index: FC<IndexProps> = ({
    name,
}) => {
    return (
        <div className="flex space-x-2.5">
            <Image
            src="/images/employeeManagement/indexICON.svg"
            alt="index icon"
            width={25}
            height={25}
            />
            <p>{name}</p>
            <Image className="pt-1" src="/images/header/profile.svg" width={15} height={15} alt="profile arrow"></Image>
        </div>
    );
}

export default Index;
