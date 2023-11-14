import List from "./List";
import { useEffect, useState } from "react";
import ListIndex from "./ListIndex";
import { usePathname } from "next/navigation";

export default function ListContainer() {
  const pathname = usePathname();
  const [allEmployeeData, setAllEmployeeData] = useState<allAccountSearch[]>(
    []
  );
  useEffect(() => {
    fetch("/api/allAcountSearch")
      .then((res) => res.json())
      .then((data) => {
        setAllEmployeeData(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ListIndex
        account="姓名/員工編號"
        department="部門/職位"
        // team="團隊"
        phone="聯絡方式"
        // time="打卡時間"
        type="類型"
        // pth={pathname}
      />
      {allEmployeeData &&
        allEmployeeData.map((data, index) => (
          <div className="col-start-1 col-end-7" key={index}>
            <List
              account={data.account_name}
              department={data.account_department}
              position={data.account_position}
              id={data.account_employee_id}
              phone={data.account_phone}
              type={data.accountType_id}
            />
          </div>
        ))}
      {/* <div className="col-start-1 col-end-7">
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          time="2023/08/16 8:00"
          phone="09123456789"
          type="全職"
          is_late={false}
          pth={pathname}
        />
      </div>
      <div className="col-start-1 col-end-7">
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          time="2023/08/16 8:20"
          phone="09123456789"
          type="兼職"
          is_={true}
          is_late={true}
          pth={pathname}
        />
      </div>
      <div className="col-start-1 col-end-7">
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          time="2023/08/16 8:00"
          phone="09123456789"
          type="工讀生"
          is_late={false}
          pth={pathname}
        />
      </div>
      <div className="col-start-1 col-end-7">
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          time="2023/08/16 8:00"
          phone="09123456789"
          type="工讀生"
          is_late={false}
          pth={pathname}
        />
      </div>
      <div className="col-start-1 col-end-7">
        <List
          account="Single Account"
          id="123456789"
          department="XXXXXXXXXX"
          position="主管"
          team="XXXX團隊"
          time="2023/08/16 8:00"
          phone="09123456789"
          type="兼職"
          is_late={false}
          pth={pathname}
        />
      </div> */}
    </div>
  );
}
