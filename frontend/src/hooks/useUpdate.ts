import { useState } from 'react';
import axiosInstance from '../api/api'; 

const useUpdate = <T>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateById = async (id: string, data: T) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put<T>(`/resource/${id}`, data);
      return response.data;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateById, loading, error };
};

export default useUpdate;
