const CardTiga = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center">
        <div class="container kartu kartu-border card w-50">
          <div class="card-body d-flex flex-row ms-4">
            <h5 className="w-50">
              Every transaction will be charged with a 10% platform fee (5-6%
              for Indonesia) with a minimum of 1.5 PHP (Rp150 for Indonesia)
              Cashout to your bank/e-wallet will be charged with transfer fee of
              IDR 5.000 / PHP 50
            </h5>
            <div className="ms-5 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraccoon_happy.e82cc2b2.svg&w=384&q=75"
                alt="Uyuu"
                width={"160px"}
                className="ms-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTiga;
