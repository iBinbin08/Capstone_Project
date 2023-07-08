import Stepper from "./stepper";
import GenderButton from "./genderButton";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col items-center ">
      {<Stepper />}
      <br />
      <form
        action="#"
        className="border flex flex-col align-items-center mx-5 p-5 rounded"
      >
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white text-center">
          Personal Info
        </h3>
        <div className="grid gap-2 mb-2 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="labelInput">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
          
          <div>
            <label htmlFor="middleName" className="labelInput">
              Middle Name:
            </label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
         
          <div>
            <label htmlFor="LastName" className="labelInput">
              Last Name:
            </label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
         
          <div>
            <label htmlFor="suffix" className="labelInput">
              Suffix:
            </label>
            <input
              type="text"
              name="suffix"
              id="suffix"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
        
          <div>
            <label htmlFor="zone" className="labelInput">
              Zone:
            </label>
            <input
              type="text"
              name="zone"
              id="zone"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
         
          <div>
            <label htmlFor="street" className="labelInput">
              Street:
            </label>
            <input
              type="text"
              name="street"
              id="street"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
          
          <div>
            <label htmlFor="birthday" className="labelInput">
              Birthday:
            </label>
            <input
              type="text"
              name="birthday"
              id="birthday"
              className="inputUser"
              placeholder="name@company.com"
              required=""
            />
          </div>{" "}
         
          <div className="flex">
            <div>
              
            {<GenderButton />}

            </div>
            <div>
              {" "}
              <label htmlFor="birthday" className="labelInput">
                Birthday:
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
