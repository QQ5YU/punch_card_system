import Image from "next/image";
import Input from "./Input";

export default function Header() {
  return (
    <header className="flex h-[101px] w-[85vw] outline outline-2 outline-gray-200">
      {/* <Image src="/images/employeeManagement/search.svg" width={55} height={55} alt="search" />
      <input className="flex-1 outline outline-1 outline-gray-300 rounded-md" type="search" placeholder="Search anything that comes to mind"></input> */}
      <div className="flex w-screen">
        <div className="w-[65vw]">
          <Input
            inputType="text"
            id="search"
            name="search"
            placeholder="Search anything that comes to mind"
            inputClassName="flex-auto w-[30vw] mx-20"
            buttonType="submit"
            src="/images/employeeManagement/search.svg"
            alt="search"
          />
        </div>
        <div className="flex flex-auto self-center justify-center">
          <Image className="" src="/images/header/profilePicture.svg" width={40} height={40} alt="profile picture" />
          <div className="flex-col">
            <div className="">XXXXXXXXXX</div>
            <div>Owner</div>
          </div>

        </div>
      </div>
    </header>
  );
}
