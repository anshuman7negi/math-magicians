import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': '0oWa33wHCcpfBcURu9UPv39A2rSCT1DcyejUtSf8',
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.length);
          setIsLoading(false);
          setQuote(data[randomIndex]?.quote);
        } else {
          setError('Error fetching quotes');
          setIsLoading(false);
        }
      } catch {
        setError('Error fetching quotes');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="quotes">
      {isLoading && <p className="randomQuotes">Loading...</p>}
      {!isLoading && error && (
      <p className="randomQuotes">
        Error:
        {error}
      </p>
      )}
      {!isLoading && !error && <p className="randomQuotes">{quote}</p>}
    </div>
  );
};

export default Quotes;
