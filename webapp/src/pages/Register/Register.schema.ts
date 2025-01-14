import * as Yup from 'yup';

export const registerSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  username: Yup.string().required(),
  password: Yup.string().min(8).required(),
});

export type RegisterSchema = Yup.InferType<typeof registerSchema>;
