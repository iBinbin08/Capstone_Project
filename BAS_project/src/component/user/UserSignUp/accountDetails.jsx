import ImageUpload from "./imageUpload";

function AccountDetails() {
  return (
    <div className="border rounded flex grid m-16 px-16 py-8">
      <form className="">
        {/* <div className="flex">
          <div>
            {" "}
            <label htmlFor="">Images Uploaded</label>
          <div>
          </div>
            {" "}
            <button type="button">Upload Picture </button>
          </div>
        </div> */}

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

        <button type="button" className="float-right rounded-md  bg-gray-600 py-2 px-4 m-1">
          Next
        </button>
      </form>
    </div>
  );
}

export default AccountDetails;
