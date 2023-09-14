"use client";
import { useState } from "react";
import Image from "next/image";
import "./employeeManagement.css";
import Button from "../components/Button";
import Index from "../components/Index";
import List from "../components/List";
import ListBar from "../components/ListBar";
import ListBar1 from "../components/ListBar1";

export default function EmployeeManagement() {
  const [ischeckIn, setIscheckIn] = useState<boolean>(false);
  return (
    <div className="flex flex-col mx-10">
      <div className="flex justify-between">
        <p className="text-darkBlue text-2xl font-bold py-8">員工管理</p>
        <div className="flex space-x-3">
          <Button
            text="匯出總表"
            type="button"
            src="/images/employeeManagement/remit.svg"
            alt="logo"
            inputClassName=""
          />
          <Button
            text="新增員工"
            type="button"
            src="/images/employeeManagement/add.svg"
            alt="logo"
            inputClassName="bg-darkBlue text-white"
          />
        </div>
      </div>
      <div className="flex space-x-14">
        <p className="font-bold">全部員工</p>
        <p className="font-bold">主管</p>
      </div>
      <div className="block bg-gray-300 w-full h-px mt-5"></div>
      <div className="flex m-5 space-x-20">
        <Index name="姓名"/>
        <Index name="員工編號"/>
        <Index name="部門"/>
        <Index name="職位"/>
        <Index name="團隊"/>
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
      <div>
        {/* <ListBar />
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          phone="09123456789"
          type="全職"
        /> */}
      </div>
      <div className="">
        <ListBar1 />
      </div>
    </div>
  );
}
