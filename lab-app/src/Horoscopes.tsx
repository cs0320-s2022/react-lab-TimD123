import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextBox from "./TextBox"
// @ts-ignore
import axios from 'axios';
//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from "./logo.svg";

function Horoscopes() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
                sun: sun,
                moon: moon,
                rising: rising
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response: { data: { [x: string]: React.SetStateAction<never[]>; }; }) => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <div className="Horoscopes">
            <header className="Horoscopes-header">
                <div>
                    <TextBox label={"sun sign"} change={setSun}/>
                </div>
                <div>
                    <TextBox label={"moon sign"} change={setMoon}/>
                </div>
                <div>
                    <TextBox label={"rising sign"} change={setRising}/>
                </div>
                <div>
                    <AwesomeButton type={'primary'} onPress={requestHoroscope}>Submit</AwesomeButton>
                    {horoscope == null ? "" : horoscope.map((trait: string) => <p>{trait}</p>)}
                </div>
            </header>
        </div>
    );
}


export default Horoscopes