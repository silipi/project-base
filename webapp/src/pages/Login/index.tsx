import Form from '@/components/forms/Form';
import PasswordField from '@/components/forms/PasswordField';
import TextField from '@/components/forms/TextField';
import { loginSchema, LoginSchema } from './Login.schema';
import { Button } from '@/components/shadcn/ui/button';
import useLoginSubmit from './useLoginSubmit';
import useGithubAuth from './useGithubAuth';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa6';
import AuthSection from '@/components/sections/AuthSection';
import useGoogleAuth from './useGoogleAuth';

const Login = () => {
  const { mutateAsync, isPending } = useLoginSubmit();
  const { handleGithubLogin } = useGithubAuth();
  const { handleGoogleLogin } = useGoogleAuth();

  const handleSubmit = (data: LoginSchema) => {
    mutateAsync(data);
  };

  return (
    <AuthSection
      title="Login"
      description="Enter your email and password to login"
      secondaryLink={{
        text: "Don't have an account? Register here!",
        to: '/register',
      }}
    >
      <Form onSubmit={handleSubmit} schema={loginSchema}>
        <fieldset disabled={isPending}>
          <div className="flex flex-col gap-4">
            <TextField
              name="email"
              placeholder="me@example.com"
              autoComplete="off"
            />
            <PasswordField name="password" />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="mr-1" />
              Google
            </Button>

            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={handleGithubLogin}
            >
              <FaGithubAlt className="mr-1" />
              Github
            </Button>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </fieldset>
      </Form>
    </AuthSection>
  );
};

export default Login;
