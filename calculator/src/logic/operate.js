export default function operate(numberOne, numberTwo, operation) {
  const one = parseFloat(numberOne || 0);
  const two = parseFloat(numberTwo || numberOne); 

  if (operation === "+") {
    return (one + two).toString();
  }
  if (operation === "-") {
    return (one - two).toString();
  }
  if (operation === "x") {
    return (one * two).toString();
  }
  if (operation === "÷") {
    if (two === 0) {
      alert("Error: Division by zero");
      return "";
    } else {
      return (one / two).toString();
    }
  }
}
