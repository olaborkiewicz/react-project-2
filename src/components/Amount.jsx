const Amount = ({ amount, setAmount }) => {
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <input
      value={amount}
      onChange={handleChange}
      type="number"
      className="amount"
    />
  );
};
export default Amount;
