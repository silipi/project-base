import { Button } from '@/components/shadcn/ui/button';
import useLogout from '@/hooks/useLogout';

const Home = () => {
  const { logout } = useLogout();

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
