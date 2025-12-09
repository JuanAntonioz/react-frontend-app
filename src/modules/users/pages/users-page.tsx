import { Button } from '@/core/ui';
import { useLogin } from '@/modules/auth/hooks/use-login';

export const Users = () => {
  const { logout } = useLogin();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button type="button" onClick={logout}>
        Cerrar sesión
      </Button>
    </div>
  );
};
