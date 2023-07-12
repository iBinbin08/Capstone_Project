const LogIn = () => {
  const img = "../images/BAS-Logo-1.png"
  return (
    <>
      <div>
        <img
          src={img}
          style={{ height: 294, width: 381 }}
          alt="logo"
        />
      </div>
      <div>
        <p className="Log">Log In</p>
      </div>
      <div>
        <label htmlFor="">Email Address</label> <br />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label> <br />
        <input type="text" />
      </div>
      <br />
      <div className="btn">
        <button onClick="">Log In</button> <br />
      </div>
      <br /> <br />
      <div className="btn">
        <button onClick="">Create Account</button>
      </div>
    </>
  );
};
export default LogIn;
