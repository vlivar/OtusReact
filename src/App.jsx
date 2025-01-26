import React from 'react';
import CatFactComponent from './components/CatFactComponent';

const App = () => {
    return (
        <div>
            <h1>Получить случайный факт о котах</h1>
            <CatFactComponent apiUrl="https://catfact.ninja/facts"/>
        </div>
    );
};

export default App;