import axios from "axios";
import { useState } from "react";

function App() {
    const [degree, setDegree] = useState(0);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [inp, setInp] = useState("");

    function handleInp(event) {
        setInp(event.target.value);
    }

    function getData() {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=415ddc0c099193159d2816f5073434b5`)
            .then(function (response) {
                console.log(response.data);
                setDegree(response.data.main.temp);
                setCity(response.data.name);
                setWeather(response.data.weather[0].main);
            })
            .catch(function (error) {
                console.error("There was an error making the request:", error);
            });
    }

    return (
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div className="p-2 rounded-md" style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                <h2 className="font-medium">Hey!⛅</h2>
                <p className="text-xs">Do you want to know the weather report</p>
                <input
                    type="text"
                    onChange={handleInp}
                    className="rounded-md h-6 p-1 text-xs mt-2 outline-none"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}
                    placeholder="City Name?"
                />
                <br />
                <button onClick={getData} className="bg-black text-white rounded-lg mt-2 p-1 text-xs">
                    Get Report 🌩️
                </button>
                <p className="text-xs mt-2 p-1">Degree: {degree} | City: {city} | Weather: {weather}</p>
            </div>
        </div>
    );
}

export default App;
