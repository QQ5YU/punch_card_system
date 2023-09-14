import Image from "next/image";
import Input from "./Input";

export default function Header() {
  return (
    <header className="flex h-[101px] w-[85vw] outline outline-2 outline-gray-200">
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
        <div className="flex flex-auto self-center justify-end space-x-4 mr-10">
          <Image className="" src="/images/header/profilePicture.svg" width={45} height={45} alt="profile picture" />
          <div className="flex-col">
            <div className="flex space-x-2">
              <div>XXXXXXXXXX</div>
              <div>
                  <Image className="pt-1.5" src="/images/header/profile.svg" width={20} height={20} alt="profile arrow"></Image>
              </div>
            </div>
            <div className="text-xs text-gray-400">Owner</div>
          </div>

        </div>
      </div>
    </header>
  );
}
