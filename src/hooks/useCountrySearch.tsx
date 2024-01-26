import { useEffect, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

const useCountrySearch = (searchValue) => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce the function to delay API calls
  const debouncedFetchCountries = debounce(async (country) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://restcountries.com/v2/name/${country}`
      );

      setCountries(
        response.data.map((country) => {
          return {
            country: country.name,
          };
        })
      );
    } catch (error) {
      setCountries([]);
      setError(error.message || "Error fetching countries");
    } finally {
      setLoading(false);
    }
  }, 500); // Adjust the debounce delay as needed (e.g., 500 milliseconds)

  useEffect(() => {
    if (searchValue.trim() !== "") {
      debouncedFetchCountries(searchValue);
    } else {
      setCountries([]);
      setError(null);
      setLoading(false);
    }
  }, [searchValue]);

  return { country, setCountry, countries, loading, error };
};

export default useCountrySearch;
