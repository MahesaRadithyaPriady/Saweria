const StartingOut = ({ header }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      {header == "Pricing" ? (
        <div className="kartu-pricing border border-bottom-0 border-dark fw-bold">
          <span>{header}</span>
        </div>
      ) : (
        <div className="kartu-start border border-bottom-0 border-dark fw-bold">
          <span>{header}</span>
        </div>
      )}
    </div>
  );
};

export default StartingOut;
