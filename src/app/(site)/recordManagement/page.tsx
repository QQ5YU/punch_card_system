"use client";
import { useState } from "react";
import Image from "next/image";
import "./recordManagement.css";
import Button from "../components/Button";
import Index from "../components/Index";
import ListBar from "../components/ListBar";
import Pages from "@/app/components/Pages";

export default function EmployeeManagement() {
  return (
    <div className="flex flex-col mx-10">
      <div className="flex justify-between">
        <div className="flex space-x-10">
          <p className="text-darkBlue text-2xl font-bold py-8">打卡記錄管理：一週</p>
          <div className="self-center bg-gray-200 rounded-full text-xl font-bold px-5">&lt; 2023, 8/14 - 8/19 &gt;</div>
        </div>
        <div className="flex space-x-3">
          <Button
            text="匯出總表"
            type="button"
            src="/images/employeeManagement/remit.svg"
            alt="logo"
            inputClassName=""
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
      <div className="flex space-x-20 md:space-x-10 m-5">
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
      <div className="">
        <ListBar />
      </div>
      <div>
        <Pages />
      </div>
    </div>
  );
}
