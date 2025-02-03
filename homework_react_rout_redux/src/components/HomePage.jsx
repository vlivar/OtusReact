import React from 'react';
import { useSelector } from 'react-redux';
import withAuthLayout from '../hoc/withAuthLayout';

const homePage = () => {
    const user = useSelector((state) => state.auth.user);

    return (
      <div className="home">
        <h1>HomePage</h1>
        {user ? <p>Привет, {user.username}!</p> : <p>Пожалуйста, войдите в систему.</p>}
      </div>
    );
};

export default withAuthLayout(homePage);