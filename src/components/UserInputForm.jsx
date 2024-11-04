import React from 'react';
import {useState} from "react";
import {calculateInvestmentResults} from "../util/investment";
// import {formatter} from "../util/investment";


export default function UserInputForm({onChangeInitialInvestment, onChangeAnnualInvestment, onChangeExpectedReturn, onChangeDuration, annualInvestment, initialInvestment, duration, expectedReturn}) {

    // let result = calculateInvestmentResults({
    //     initialInvestment,
    //     anualInvestment,
    //     expectedReturn,
    //     duration
    // });
    // console.log(result);



    return (
        <>

            <section id="user-input">
                <div className="input-group">

                    <p>
                        <label htmlFor="initial_investment">Initial Investment</label>
                        <input type="number" name="initial_investment" required value={initialInvestment}
                               onChange={onChangeInitialInvestment} />
                    </p>

                    <p>
                        <label htmlFor="anual_investment">Anual Investment</label>
                        <input type="number" name="anual_investment" required value={annualInvestment}
                               onChange={onChangeAnnualInvestment}/>
                    </p>

                </div>

                <div className="input-group">

                    <p>
                        <label htmlFor="expected_return">Expected Return</label>
                        <input type="number" name="expected_return" required value={expectedReturn}
                               onChange={onChangeExpectedReturn}/>
                    </p>

                    <p>
                        <label htmlFor="duration">Return Value</label>
                        <input type="number" name="duration" required value={duration}
                               onChange={onChangeDuration}/>
                    </p>
                </div>
            </section>
        </>
    );
}