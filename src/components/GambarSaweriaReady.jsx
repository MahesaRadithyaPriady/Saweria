const GambarSaweriaReady = () => {
  return (
    <div>
      <div className="gambar-saweria-ready-top d-flex flex-column justify-content-center align-items-center container mt-5">
        <img
          src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapy_happy.603c7293.svg&w=384&q=75"
          width={"300px"}
          className="ms-3 gambar-saweria-ready"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <h4>ready to join saweria?</h4>
        <button className="btn-ready btn-register me-3 btn btn-warning px-3 py-2 ">
          Register
        </button>
      </div>
    </div>
  );
};

export default GambarSaweriaReady;
