const CardP = () => {
  return (
    <div className="cardP d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="kartu card IBM" style={{ width: "90vh" }}>
        <div className="card-body">
          Saweria helps you to receive financial support from your fans with
          these payment methods:
          <div className="list-indo container d-flex flex-row">
            <h5 className="mt-2 ms-4 fs-6">🇮🇩 Indonesia</h5>
            <h6 className="philipines mt-2 fs-6 mt-3">🇵🇭 Philipines</h6>
          </div>
          <div className="d-flex flex-row">
            <ul>
              <h5>
                <li>Gopay</li>
              </h5>
              <h5>
                <li>OVO</li>
              </h5>
              <h5>
                <li>DANA</li>
              </h5>
              <h5>
                <li>LINK AJA</li>
              </h5>
              <h5>
                <li>QRIS</li>
              </h5>
            </ul>
            <ul className="ms-3">
              <h5>
                <li>MAYA</li>
              </h5>
              <h5>
                <li>GCASH</li>
              </h5>
              <h5>
                <li>SHOPEEPAY</li>
              </h5>
              <h5>
                <li>GRABPAY</li>
              </h5>
            </ul>
            <div className="gambar-ayam">
              <img
                src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_money.a24d8223.svg&w=1920&q=75"
                alt=""
                width={"120px"}
              />
            </div>
          </div>
          <h5 className="IMB fs-6">
            You can easily cashout to all banks and e-wallet in Indonesia /
            Philipines
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardP;
