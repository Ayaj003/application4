import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from './calculate';
import './App.css';

function App() {
    const [displayValue, setDisplayValue] = useState('');
    const [equation, setEquation] = useState([]);
    const [isNewValue, setIsNewValue] = useState(false);

    const handleButtonClick = (buttonName) => {
        const isOperator = ['+', '-', '×', '÷'].includes(buttonName);
        const isDecimal = buttonName === '.';
    
        if (buttonName === '=') {
            const result = calculate(equation);
            setDisplayValue(String(result));
            setEquation([result]);
            setIsNewValue(true);
        } 
        else if (buttonName === 'AC') {
            setDisplayValue('');
            setEquation([]);
            setIsNewValue(false);
        } 
        else if (buttonName === '%') {
            const percentageValue = parseFloat(displayValue) / 100;
            setDisplayValue(String(percentageValue));
            setEquation([...equation.slice(0, -1), percentageValue]);
        } 
        else if (buttonName === '+/-') {
            const toggledValue = parseFloat(displayValue) * -1;
            setDisplayValue(String(toggledValue));
            setEquation([...equation.slice(0, -1), toggledValue]);
        } 
        else {
            if (isOperator) {
                setEquation([...equation, buttonName]);
                setIsNewValue(true);
            } 
            else if (isDecimal && isNewValue) {
                setDisplayValue(buttonName);
                setEquation([...equation, '0' + buttonName]);
                setIsNewValue(false);
            } 
            else if (isDecimal && !isNewValue && !displayValue.includes('.')) {
                setDisplayValue(displayValue + buttonName);
                setEquation([...equation.slice(0, -1), equation[equation.length - 1] + buttonName]);
            } 
            else {
                if (isNewValue || equation.length === 0) {
                    setDisplayValue(buttonName);
                    setEquation([...equation, buttonName]);
                    setIsNewValue(false);
                } 
                else {
                    setDisplayValue(displayValue + buttonName);
                    let lastElement = equation[equation.length - 1];
                    if (!isNaN(lastElement) || (lastElement.includes('.') && !isOperator)) {
                        equation.pop();
                        setEquation([...equation, lastElement + buttonName]);
                    } 
                    else {
                        setEquation([...equation, buttonName]);
                    }
                }
            }
        }
    };

    return (
        <div className="App">
            <Display value={displayValue} />
            <ButtonPanel handleClick={handleButtonClick} />
        </div>
    );
}

export default App;
