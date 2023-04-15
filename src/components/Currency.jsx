import Button from "./Button";
import Amount from "./Amount";
import Select from "./Select";
import Result from "./Result";

const Currency = () => {
  return (
    <>
      <div className="currency-container">
        <div className="left">
          <div className="input-container">
            <Amount />
            <Select />
            <Button />
          </div>
        </div>
        <div className="right">
          <Result />
        </div>
      </div>
    </>
  );
};
export default Currency;
