const SaweriaLogo = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2">
      <img
        src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage_characters.a1cf6cc4.svg&w=3840&q=75"
        alt="Saweria Logo"
        width={"230px"}
      />
      <h1 className="comfortaa extra-light fs-1 bold">saweria.co</h1>
      <h3 className="comfortaa fw-bold">
        Connecting Communities, <br />
        Empowering Streamers
      </h3>
      <div className="mt-3">
        <button className="btn-login me-4 btn btn-primary px-3 py-2">
          Login
        </button>
        <button className="btn-register me-3 btn btn-warning px-3 py-2">
          Register
        </button>
      </div>
    </div>
  );
};

export default SaweriaLogo;
