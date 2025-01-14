import PasswordField from '@/components/forms/PasswordField';
import TextField from '@/components/forms/TextField';
import { Button } from '@/components/shadcn/ui/button';
import { RegisterSchema, registerSchema } from './Register.schema';
import useRegisterSubmit from './useRegisterSubmit';
import Form from '@/components/forms/Form';
import AuthSection from '@/components/sections/AuthSection';

const Register = () => {
  const { mutateAsync, isPending } = useRegisterSubmit();

  const handleSubmit = (data: RegisterSchema) => {
    mutateAsync(data);
  };

  return (
    <AuthSection
      title="Register"
      description="Enter your email and password to register"
      secondaryLink={{
        text: 'Already have an account? Login here!',
        to: '/login',
      }}
    >
      <Form onSubmit={handleSubmit} schema={registerSchema}>
        <fieldset disabled={isPending}>
          <div className="flex flex-col gap-4">
            <TextField name="firstName" placeholder="First Name" />
            <TextField name="lastName" placeholder="Last Name" />
            <TextField
              name="email"
              type="email"
              placeholder="me@example.com"
              autoComplete="off"
            />
            <TextField
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="off"
            />
            <PasswordField name="password" />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </fieldset>
      </Form>
    </AuthSection>
  );
};

export default Register;
