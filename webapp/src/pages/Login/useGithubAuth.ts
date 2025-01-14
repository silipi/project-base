import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { AUTH_QUERY_KEY } from '@/hooks/useAuth';

const useGithubAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      localStorage.setItem('access_token', token);
      queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
      navigate('/');
    }
  }, [searchParams, navigate, queryClient]);

  const handleGithubLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return { handleGithubLogin };
};

export default useGithubAuth;
