import Button from "./Button";

export default function Pages() {
    return(
        <div className="flex space-x-4 py-3 justify-end">
         <Button
            text="1"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
          />
         <Button
            text="2"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
          />
         <Button
            text="3"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
          />
         <Button
            text="4"
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
          />
         <Button
            text="5 "
            type="button"
            inputClassName="bg-[#74ADF0] hover:bg-mainBlue text-white"
          />
          <p className="self-center">下一頁</p>
        </div>
    );
}