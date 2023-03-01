import React from "react";
import logo from "../img/logo1.png"
import icon from "../img/icon1.png"
// constants
const pet = "Moxie";
const num1 = 3.5;
const num2 = 7 ;

// styles
// const styles = {
//     colHeight: {
//         height: '50px'
//     },
//     marLeft: {
//         marginLeft: "0px"
//     }
// }

export default function Page1(props) {
    // console.log(props)

    return(
        <main className="container">
            <h4 className="H4alignment">Working with JSX variables and Props:</h4>
            
            <div>
                <p> Greetings from {pet}, a small dog. My name spelled backwards is {pet.split("").reverse()}</p>
                <p>random number:
                    {Math.floor(Math.random() * 10) * num1 * num2}
                </p>
                <a className={`waves-effect btn-${props.size} red`} href="https://www.google.com" target="blank"><i className={`material-icons ${props.side}`}>{props.icon}</i>Props</a>
            </div>
            <div className="row valign-wrapper" >
                <div className="col s12 m4">
                    <img src={logo} alt="silican logo" className="responsive-img"/>
                </div>
                <div className="col s12 m3">
                    <img src={icon} alt="silican icon" className="responsive-img"/>
                </div>
            </div>
        </main>
    )
}

