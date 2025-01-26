import React from 'react';
import CatFactComponent from './components/CatFactComponent';
import "./styles.css";

const App = () => {
    return (
      <div className="app-container">
        <h1 className="app-title">Получить случайный факт о котах</h1>
          <CatFactComponent apiUrl="https://catfact.ninja/fact" />
      </div>
    );
};

export default App;