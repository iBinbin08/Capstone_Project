import { useState } from "react";

import GenderDropdown from "./genderDropdown";
import CivilStatusDropdown from "./civilstatusDropdown";

import AccountDetails from "./accountDetails";

function PersonalDetails({ next }) {
  const [back, setBack] = useState(next)
  
  if (back == 0){
    return( < AccountDetails />)
  }
  return (
    <div className="border rounded flex p-5 m-32">
      <form className="w-full">
        <div className="flex flex-col">
          <label htmlFor="">First Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Middle Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Last Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Suffix: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Zone: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Street: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex space-x-9">
          <div className="pt-4 w-full">
            <div className="flex flex-col">
              <label htmlFor="">Birthday: </label>
              <input type="text" className="rounded " />
            </div>

            <div className=" flex flex-col sm:flex-row gap-4">
              <div className="">
                <label htmlFor="">Sex: </label>
                <GenderDropdown />
              </div>

              <div className="">
                <label htmlFor="">Civil Status: </label>
                <CivilStatusDropdown />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
        <button
          type="button"
          className="floatleft rounded-md  bg-gray-600 py-2 px-4 m-1"
          onClick={()=>{setBack(back-1)}}
        >
          Prev
        </button>
        <button
          type="button"
          className="float-right rounded-md  bg-gray-600 py-2 px-4 m-1"
        >
          Submit
        </button>
        </div>

     
      </form>
    </div>
  );
}

export default PersonalDetails;
