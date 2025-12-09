import { useState, useEffect } from 'react';
import { dataApi } from '@/core/api/rest';
import { USER_ENDPOINTS, USER_QUERY_PARAMS } from '../endpoints/endpoints';
import { type User, type UserResponse } from '../types/user';

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const { data } = await dataApi.get<UserResponse>(
          USER_ENDPOINTS.GET_ALL,
          {
            params: USER_QUERY_PARAMS,
          },
        );

        setUsers(data.results);
      } catch (err) {
        console.error(err);
        setError('Error obteniendo usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
