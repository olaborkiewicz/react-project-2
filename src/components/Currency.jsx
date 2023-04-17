import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Amount from "./Amount";
import Select from "./Select";
import Result from "./Result";
import Loader from "./Loader";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurr] = useState("EUR");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculate = () => {
    if (amount === "") {
      alert("Uzupełnij kwotę");
      return;
    }
    if (amount <= 0) {
      alert("Wpisano złą wartość");
      return;
    }
    setIsLoading((prevState) => !prevState);
    axios
      .get(
        `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
      )
      .then((response) => {
        setResult(Math.round(response.data.rates[0].mid * amount * 100) / 100);
      })
      .finally(() => setIsLoading((prevState) => !prevState));
  };

  return (
    <>
      <div className="currency-container">
        <div className="left">
          <div className="input-container">
            <Amount amount={amount} setAmount={setAmount} />
            <Select curr={currency} setCurr={setCurr} />
            <Button calculate={calculate} />
          </div>
        </div>
        <div className="right">
          {isLoading && <Loader />}
          {result > 0 && !isLoading && <Result result={result} />}
        </div>
      </div>
    </>
  );
};
export default Currency;
