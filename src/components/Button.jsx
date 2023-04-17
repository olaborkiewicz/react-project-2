const Button = ({ calculate }) => {
  return (
    <input
      type="button"
      className="counter"
      value="PRZELICZ"
      onClick={calculate}
    />
  );
};
export default Button;
