import React from 'react';

const withAuthLayout = (WrappedComponent) => {
  return (props) => (
    <div className="auth-layout">
      <header>
        <h2>Добро пожаловать!</h2>
      </header>
      <main>
        <WrappedComponent {...props} />
      </main>
    </div>
  );
};

export default withAuthLayout;