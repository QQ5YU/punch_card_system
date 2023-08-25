"use client";
import { useState } from "react";
import Image from "next/image";
import "./employeeManagement.css";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import Title from "../components/Title";

export default function UserLocationPage() {
  const [ischeckIn, setIscheckIn] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center flex-col w-[38.08%] min-w-[360px] max-w-[390px] mx-auto">
      <Title text="員工管理" />
    </div>
  );
}
