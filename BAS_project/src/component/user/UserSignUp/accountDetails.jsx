import { useState } from "react";
import ImageUpload from "./imageUpload";

import PersonalDetails from "./personalDetails";

function AccountDetails() {
  const [next, setNext] = useState(0)
  
  if (next == 1){
    return( < PersonalDetails next={next} />)
  }

  return (
    <div className="border rounded flex p-5 m-32">
      <form className="w-full">
        <ImageUpload />      
        <div className="flex flex-col pt-4">
          <label htmlFor="">Email Address: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Password: </label>
          <input type="password" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Confirm Password: </label>
          <input type="password" className="rounded " />
        </div>

        <button type="button" className="float-right rounded-md  bg-gray-600 py-2 px-4 m-1" onClick={() => {setNext(next + 1)}}>
          Next
        </button>
      </form>
    </div>
  );
}

export default AccountDetails;
