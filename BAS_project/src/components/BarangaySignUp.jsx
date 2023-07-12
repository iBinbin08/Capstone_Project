const BarangaySignUp = () => {
  return (
    <>
      <nav className="nav">
        <img
          src="../images/BAS-Logo-1.png"
          style={{ height: 80, width: 80 }}
          alt="logo"
        />
        <h2>Barangay Appointment System</h2>
      </nav>
      <div className="SignUp">
        <img src="" alt="" />
        <input type="button" value="Upload Pictures" />
      </div>
      <div>
        <label htmlFor="">Barangay</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Municipality</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Province</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Zip Code</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email Address</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="pass">Password</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="confirm">Confirm Password</label> <br />
        <input type="text" />
      </div>
      <br />
      <button className="btn">submit</button>
    </>
  );
};
export default BarangaySignUp;
