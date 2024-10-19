const CardEmpat = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div
        class="kartu-bottom kartu rounded card mt-5 bordered"
        style={{ width: "570px" }}
      >
        <div class="card-body rounded">
          <div className="gambar-ayam-2 d-flex flex-row">
            <div className="">
              <img
                src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_sad.23bb618d.svg&w=256&q=75"
                alt=""
                height={"210px"}
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items center ms-5">
              <h3 className="ms-2">confused?</h3>
              <h3 className="ms-2">have questions?</h3>
              <h3 className="ms-2">please check our faq</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEmpat;
