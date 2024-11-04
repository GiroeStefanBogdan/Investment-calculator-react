import {calculateInvestmentResults, formatter} from "../util/investment";

export default function Results({initialInvestment, annualInvestment, expectedReturn, duration}) {
    let result = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    });

    const initialInvestmentValue = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    console.log(result);

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Investment Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => {
                        const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestmentValue;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest;
                        return (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{formatter.format(item.valueEndOfYear)}</td>
                                <td>{formatter.format(item.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}