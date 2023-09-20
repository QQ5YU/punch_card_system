import Button from "./SiteButton";

export default function Pages() {
    return(
        <div className="flex space-x-4 py-3 justify-end">
         <Button
            text="1"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
            src=""
            alt=""
          />
         <Button
            text="2"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
            src=""
            alt=""
          />
         <Button
            text="3"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
            src=""
            alt=""
          />
         <Button
            text="4"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
            src=""
            alt=""
          />
         <Button
            text="5 "
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
            src=""
            alt=""
          />
          <p className="self-center">下一頁</p>
        </div>
    );
}