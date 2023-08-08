/* eslint-disable */
import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          "X-Api-Key": "xvQ4zn3ncUXfFpUX9jMUXA==cPAUJYLm4LO8QnWH",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex]?.quote || "");
    };

    fetchData();
  }, []);

  return (
 
      <p className="randomQotes">{quote}</p>

  );
};

export default Quotes;
