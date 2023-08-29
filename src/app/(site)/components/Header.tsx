import Image from "next/image";
import Input from "./Input";

export default function Header() {
  return (
    <header className="flex h-[101px] outline outline-2 outline-gray-200">
      {/* <Image src="/images/employeeManagement/search.svg" width={55} height={55} alt="search" />
      <input className="flex-1 outline outline-1 outline-gray-300 rounded-md" type="search" placeholder="Search anything that comes to mind"></input> */}
      <div className="flex">
        <Input
          inputType="text"
          id="search"
          name="search"
          placeholder="Search anything that comes to mind"
          inputClassName=""
          buttonType="submit"
          src="/images/employeeManagement/search.svg"
          alt="search"
        />
      </div>
    </header>
  );
}
