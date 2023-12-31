import Image from "next/image";
import Link from "next/link";
import Button from "../../components/LoginButton";
import Input from "../../components/LoginInput";
import Description from "../../components/Description";
import type { Metadata } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";


export const metadata: Metadata = {
  title: "Line@ 打卡後臺管理系統 登入",
};

export default function Loginpage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useState({
    employeeId: "",
    password: "",
  });
  const [isAlert, setIsAlert] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-center">
      <Image
        src="images/login/login_draw.svg"
        className="hidden md:block"
        width={462}
        height={347}
        alt="login draw"
      />
      <div className="hidden md:block bg-mainBlue w-px h-[448px] ml-[2.6%] mr-[5%] lg:mr-[8.2%]"></div>
        <div className="flex flex-col justify-center">
        <p className="text-darkBlue font-bold text-center text-2xl">登入</p>
        <Description
          fontSize="lg"
          textColor="darkBlue"
          fontWeight="font-bold"
          content="您好，請輸入您的員工編號及密碼"
        />
        <div className="mt-[74px] relative">
          <Input
            label="員工編號"
            id="member-number"
            name="member-number"
            src="images/login/user.svg"
            width={19}
            height={19}
            alt="uer-icon"
          />
        </div>

        <div className="mt-[29px] relative">
          <Input
            label="員工密碼"
            id="member-password"
            name="member-password"
            src="images/login/password.svg"
            width={19}
            height={19}
            alt="uer-icon"
          />
        </div>
        <Button text="登入" type="submit" />
        <Link
          href="/forgetPassword"
          className="text-right text-red-600 text-sm font-bold mt-[11px]"
        >
          忘記密碼
        </Link>
        <p className="text-center text-red-600 text-lg font-bold mt-[93px] pb-[200px] sm:pb-0 md:mt-5 ">
          員工編號或密碼有誤
        </p>
      </div>
    </div>
  );
}
