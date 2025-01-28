import React, { useState } from "react";
import MessageComponent from "./MessageComponent";
import "../styles.css";

const CatFactComponent = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Accept": "application/json",
              "X-CSRF-TOKEN": "x0kPItoVsEbWFMwXSnHCfMh4FmZBx8LAMHb4Fnz3",
            },
          });
    
          const json = await response.json();

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${json.message || "Что-то пошло не так"}`);
      }

      setData(json.fact || "Факт не найден");
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button className="fetch-button" onClick={fetchData}>
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