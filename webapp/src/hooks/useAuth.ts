import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import API from '@/services/API';
import { User } from '@/models/User';

interface AuthState {
  isInitInProgress: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export const AUTH_QUERY_KEY = 'current-user';

export const useAuth = (): AuthState => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: async () => {
      try {
        const response = await API.get<User>('/me/user');
        return response.data;
      } catch (error) {
        localStorage.removeItem('access_token');
        throw error;
      }
    },
    enabled: !!localStorage.getItem('access_token'),
    retry: false,
    staleTime: 5 * 60 * 1000, // consider data fresh for 5 minutes
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem('access_token');
    }
  }, [isError]);

  return {
    isInitInProgress: isLoading,
    isAuthenticated: !!user,
    user: user ?? null,
  };
};
