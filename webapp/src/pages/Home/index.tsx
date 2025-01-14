import { Button } from '@/components/shadcn/ui/button';
import useLogout from '@/hooks/useLogout';
import useModal from '@/hooks/useModal';

const Home = () => {
  const { logout } = useLogout();
  const { openModal } = useModal();

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={() => openModal('test', <div>teste</div>)}>
        Open Modal
      </Button>
    </div>
  );
};

export default Home;
