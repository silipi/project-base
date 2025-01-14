import { useMutation } from '@tanstack/react-query';
import { RegisterSchema } from './Register.schema';
import { useNavigate } from 'react-router-dom';
import API, { BaseErrorResponse, parseErrorMessage } from '@/services/API';
import { User } from '@/models/User';
import useNotify from '@/hooks/useNotify';

const useRegisterSubmit = () => {
  const { notifyError } = useNotify();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterSchema) => {
      const response = await API.post<User>('/auth/register', data);
      return response.data;
    },
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error: BaseErrorResponse) => {
      notifyError(parseErrorMessage(error));
    },
  });

  return { mutateAsync, isPending };
};

export default useRegisterSubmit;
