const Select = ({ curr, setCurr }) => {
  const handleChange = (e) => {
    setCurr(e.target.value);
  };

  return (
    <select className="slct" onChange={handleChange}>
      <option value="EUR" selected={curr === "EUR"}>
        EUR
      </option>
      <option value="USD" selected={curr === "USD"}>
        USD
      </option>
      <option value="CHF" selected={curr === "CHF"}>
        CHF
      </option>
    </select>
  );
};
export default Select;
