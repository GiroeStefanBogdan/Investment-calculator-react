import investmentLogo from '../assets/investment-calculator-logo.png';

export default function Header({children}) {

    return (
        <>
            <header id="header">
                <img id="img" src={investmentLogo} alt="investment calculator logo"/>
                <h1>{children}</h1>
            </header>
        </>
    );
}