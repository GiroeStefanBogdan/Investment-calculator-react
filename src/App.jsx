import Header from "./components/Header.jsx";
import UserInputForm from "./components/UserInputForm.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
    const [initialInvestment, setInitialInvestment] = useState(1000);
    const [annualInvestment, setAnnualInvestment] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(6);
    const [duration, setDuration] = useState(10);

    const inputIsValid = duration >= 1;
    function handleInitialInvestmentChange(event) {
        setInitialInvestment(Number(event.target.value));
    }

    function handleAnualInvestmentChange(event) {
        setAnnualInvestment(Number(event.target.value));
    }

    function handleExpectedReturnChange(event) {
        setExpectedReturn(Number(event.target.value));
    }

    function handleDurationChange(event) {
        setDuration(Number(event.target.value));
    }

    return (
        <>
            <Header>Investment Calculator</Header>
            <UserInputForm onChangeInitialInvestment={handleInitialInvestmentChange} onChangeAnnualInvestment={handleAnualInvestmentChange} onChangeExpectedReturn={handleExpectedReturnChange} onChangeDuration={handleDurationChange} initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}  />
            {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
            {inputIsValid && <Results initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/> }
        </>
    )
}

export default App
