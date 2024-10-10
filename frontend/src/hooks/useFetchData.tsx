import { useState, useEffect } from 'react';
import axiosInstance from '../api/api';
import { AxiosError } from 'axios';

interface UseFetchData<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetchData = <T,>(endpoint: string, id?: string | number): UseFetchData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `${endpoint}/${id}` : endpoint;
        const response = await axiosInstance.get<T>(url);
        setData(response.data);
        setError(null); 
      } catch (err) {
        if (err instanceof AxiosError && err.response) {
          setError(err.response.data || err.message); 
        } else if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError('An unknown error occurred');
        }
        setData(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, id]);

  return { data, loading, error };
};

export default useFetchData;
