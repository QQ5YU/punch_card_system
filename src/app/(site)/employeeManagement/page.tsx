"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../components/SiteButton";
import Modal from "../../components/NewModal";
import "./employeeManagement.css";

export default function EmployeeManagement() {
  const [ButtonPop, setButtonPop] = useState(false);
  const [allEmployeeData, setAllEmployeeData] = useState([]);
  useEffect(() => {
    fetch("/api/allAcountSearch")
      .then((res) => res.json())
      .then((data) => {
        setAllEmployeeData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col mx-10">
      <Modal is_open={ButtonPop} setButtonPop={setButtonPop} />
      <div className="flex justify-between">
        <p className="text-darkBlue text-2xl font-bold py-8">員工管理</p>
        <div className="flex space-x-3 mt-3">
          <Button
            text="匯出總表"
            type="button"
            src="/images/employeeManagement/remit.svg"
            alt="logo"
            inputClassName="outline outline-2 outline-gray-200"
          />
          <Button
            text="新增員工"
            type="button"
            src="/images/employeeManagement/add.svg"
            alt="logo"
            inputClassName="bg-darkBlue text-white"
            onClick={() => setButtonPop(true)}
          />
        </div>
      </div>
      <div className="flex relative">
        <div className="flex space-x-14">
          <p className="font-bold">全部員工</p>
          <p className="font-bold">主管</p>
        </div>
        <div className="flex space-x-1 absolute right-0 top-4">
          <Image
            src="/images/employeeManagement/indexICON.svg"
            alt="index icon"
            width={25}
            height={25}
          />
          <p className="text-gray-500">更新於2023/8/16</p>
        </div>
      </div>
      <div className="block bg-gray-300 w-full h-px mt-5"></div>
    </div>
  );
}
