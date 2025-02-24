import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForecast = async () => {
        var response = await fetch(
            'api/WeatherForecast', {
            method: 'get'
            }
        )

        var responseJson = await response.json();
        this.setState({
            weatherForecast: responseJson
        })
    }

    render() {
        const weatherForecast = this.state.weatherForecast.map((item, index) => <li key={index}>{item.summary}, TempC: {item.temperatureC}; At date {item.date}</li>)

        return (
            <div className="App">
                <button onClick={this.getWeatherForecast}>get weather</button>
                <ul>{weatherForecast}</ul>
            </div>
        );
    }
}

export default App;