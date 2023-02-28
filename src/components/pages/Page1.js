import React from "react";
// constants
const pet = "Moxie";
const num1 = 3.5;
const num2 = 7 ;

export default function Page1(props) {
    console.log(props)

    return(
        <main className="container">
            <div>
                <h4>Working with JSX variables and Props:</h4>
                    <p> Greetings from {pet}, a small dog. My name spelled backwards is {pet.split("").reverse()}</p>
                    <p>random number:
                        {Math.floor(Math.random() * 10) * num1 * num2}
                    </p>
                    <a className={`waves-effect btn-${props.size} red`} href="https://www.google.com" target="blank"><i className={`material-icons ${props.side}`}>{props.icon}</i>Dream</a>
            </div>
        </main>
    )
}

