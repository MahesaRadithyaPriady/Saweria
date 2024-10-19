const Footer = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="footer d-flex flex-row justify-content-center align-items-center">
          <div className="me-5">
            <h5>Made with 💙 from Mahesa </h5>
            <h5 className="mt-3">PT Mahesa Telecomunity</h5>
          </div>
          <div className="footer-2 ms-5 my-5 text-end">
            <h5 className="terms">Terms and Conditions</h5>
            <h5 className="FAQ">FAQ</h5>
            <h5 className="CHANGELOG">Changelog</h5>
            <div className="mt-1">
              <img
                src="https://w7.pngwing.com/pngs/612/278/png-transparent-email-illustration-gmail-computer-icons-email-google-symbol-gmail-angle-rectangle-triangle-thumbnail.png"
                alt="Email"
                width={"30px"}
              />
              <img
                className="mx-2"
                src="https://w7.pngwing.com/pngs/389/430/png-transparent-instagram-social-media-instagram-black-social-social-media-logo-icon.png"
                alt="Isntagram"
                width={"30px"}
              />
              <img
                className="me-2"
                src="https://w7.pngwing.com/pngs/95/535/png-transparent-silhouette-computer-icons-twitter-twitter-logo-computer-wallpaper-monochrome-thumbnail.png"
                alt="twiter"
                width={"30px"}
              />
              <img
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png"
                width={"30px"}
                alt="Discord"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
