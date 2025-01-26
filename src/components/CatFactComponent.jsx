import React, { useState } from "react";
import MessageComponent from "./MessageComponent";

const CatFactComponent = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${json.message || "Что-то пошло не так"}`);
      }

      setData(json.data[0]?.fact || "Факт не найден");
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
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
        {data && <MessageComponent message={data} isError={false} />}
        {error && <MessageComponent message={error} isError={true} />}
      </div>
    </div>
  );
};

export default CatFactComponent;