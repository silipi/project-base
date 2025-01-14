import { useMutation } from '@tanstack/react-query';
import { LoginSchema } from './Login.schema';
import { useNavigate } from 'react-router-dom';
import API, { BaseErrorResponse, parseErrorMessage } from '@/services/API';
import { User } from '@/models/User';
import useNotify from '@/hooks/useNotify';

interface AuthLoginResponse {
  access_token: string;
  user: User;
}

const useLoginSubmit = () => {
  const { notifyError } = useNotify();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: LoginSchema) => {
      const response = await API.post<AuthLoginResponse>('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access_token);
      navigate('/');
    },
    onError: (error: BaseErrorResponse) => {
      notifyError(parseErrorMessage(error));
    },
  });

  return { mutateAsync, isPending };
};

export default useLoginSubmit;
