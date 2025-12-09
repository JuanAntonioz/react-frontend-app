import { VirtualList } from '@/core/ui/collections/virtual-list';
import { FullScreenLoader } from '@/core/ui/feedback/loader';
import { useGetUsers } from '../hooks/use-get-users';
import { UserCard } from '../components/user-card';

export const Users = () => {
  const { users, loading } = useGetUsers();

  if (loading) return <FullScreenLoader />;

  return (
    <div className="p-4 flex flex-col gap-4 bg-gray-50">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Directorio</h1>
        <p className="text-sm text-gray-500">
          Mostrando {users.length} usuarios
        </p>
      </header>

      <div
        className="border rounded-lg overflow-hidden bg-white shadow-sm"
        style={{ height: '600px' }}
      >
        <VirtualList
          data={users}
          containerHeight="100%"
          itemSize={80}
          renderItem={(user) => (
            <div className="p-2">
              <UserCard
                name={`${user.name.first} ${user.name.last}`}
                email={user.email}
                avatar={user.picture.thumbnail}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};
