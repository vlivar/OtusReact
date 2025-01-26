import React, { useState } from "react";

// Компонент для отображения сообщений
const MessageCard = ({ message, isError }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "12px",
        fontSize: "18px",
        color: "white",
        backgroundColor: isError ? "red" : "green",
        marginTop: "16px",
        textAlign: "center",
        maxWidth: "400px",
      }}
    >
      {message}
    </div>
  );
};

// Основной компонент для выполнения запроса
const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Выполнение запроса к API
      const response = await fetch("https://catfact.ninja/facts");
      const json = await response.json();

      if (!response.ok) {
        // Если код ответа не 2**, обработать ошибку
        throw new Error(`Ошибка ${response.status}: ${json.message || "Что-то пошло не так"}`);
      }

      // Успешный ответ
      setData(json.data[0]?.fact || "Факт не найден"); // Берем первый факт из ответа
      setError(null);
    } catch (err) {
      // Обработка ошибки
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "16px",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "16px", color: "#333" }}>
        Получить случайный факт о котах
      </h1>
      <button
        onClick={fetchData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "white",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Запросить факт
      </button>
      <div>
        {data && <MessageCard message={data} isError={false} />}
        {error && <MessageCard message={error} isError={true} />}
      </div>
    </div>
  );
};

export default FetchData;