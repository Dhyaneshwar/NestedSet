import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataTransformer } from "../utils/transformer";
import { setTransformedData } from "../redux/dataSlice";

export const useFetch = (url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        const transformedResult = dataTransformer(result);
        setData(transformedResult);
        dispatch(setTransformedData(transformedResult));
      } catch (err) {
        setError(err.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
