/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, FormProvider, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type InferredFormData<T extends Yup.AnyObjectSchema> = Yup.InferType<T>;

interface FormProps<T extends Yup.AnyObjectSchema>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  schema: T;
  onSubmit: (data: InferredFormData<T>) => void;
  onFormInvalid?: (errors: Record<string, { message: string }>) => void;
  defaultValues?: DefaultValues<InferredFormData<T>>;
  children: React.ReactNode;
}

function Form<T extends Yup.AnyObjectSchema>({
  schema,
  onSubmit,
  onFormInvalid,
  defaultValues,
  children,
  ...rest
}: FormProps<T>) {
  const methods = useForm<InferredFormData<T>>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, onFormInvalid as any)}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
