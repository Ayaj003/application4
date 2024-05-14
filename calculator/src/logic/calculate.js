import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return { total: null, next: null, operation: null };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};  
    }
    if (obj.operation) {
      return { next: (obj.next ? obj.next + buttonName : buttonName) };
    } else {
      return { next: (obj.next ? obj.next + buttonName : buttonName), total: null };
    }
  }

  if (buttonName === ".") {
    if (obj.next && obj.next.includes(".")) {
      return {}; 
    }
    return { next: (obj.next ? obj.next + "." : "0.") };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    }
    return {}; 
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    return obj.total ? { total: (-1 * parseFloat(obj.total)).toString() } : {};
  }

  if (buttonName === "%") {
    if (obj.next) {
      return { next: (parseFloat(obj.next) / 100).toString() };
    }
    return obj.total ? { total: (parseFloat(obj.total) / 100).toString() } : {};
  }

  if (!obj.next && !obj.total) {
    return { operation: buttonName };
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
}