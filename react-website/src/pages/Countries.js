import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchPrices = async () => {
      try {
        const response = await fetch("/countryPrices.json");
        if (!response.ok) {
          throw new Error("Failed to load prices");
        }
        const data = await response.json();
        setPrices(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCountries();
    fetchPrices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="countries-container">
      <h2>Countries and Cities to travel with us</h2>
      <div className="countries-list">
        {countries.map((country) => (
          <div key={country.cca3} className="country-card">
            <h3>{country.name.common}</h3>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area ? `${country.area.toLocaleString()} km²` : 'N/A'}</p>
            <p><strong>Language(s):</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <p><strong>Daily Minimum Price:</strong> ${prices[country.name.common] || 'N/A'}</p>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="country-flag"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
