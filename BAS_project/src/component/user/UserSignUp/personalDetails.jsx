

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
        <div className="flex flex-col pt-4">
          <label htmlFor="">First Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Middle Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Last Name: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Suffix: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Zone: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Street: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="">Birthday: </label>
          <input type="text" className="rounded " />
        </div>

        <div className="flex space-x-9">
        <div className="flex flex-col pt-4">
          <label htmlFor="">Sex: </label>
          <input type="text" className="rounded " />
        </div>
        <div className="flex flex-col pt-4">
          <label htmlFor="">Civil Status: </label>
          <input type="text" className="rounded " />
        </div>
        </div>

        <button type="button" className="float-right rounded-md  bg-gray-600 py-2 px-4 m-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AccountDetails;