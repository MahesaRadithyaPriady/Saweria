import Card from "../components/Card";
import StartingOut from "../components/StartingOut";

const CardWithHeader = ({ children, header }) => {
  return (
    <div>
      {/* {console.log(header)} */}
      <div>
        <StartingOut header={header} />
        <Card>{children}</Card>
      </div>
    </div>
  );
};

export default CardWithHeader;
