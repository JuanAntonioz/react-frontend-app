import { memo } from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatar: string;
}

export const UserCard = memo(({ name, email, avatar }: UserCardProps) => {
  return (
    <article className="flex items-center h-full gap-4 p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={avatar}
        alt={`Avatar de ${name}`}
        className="w-12 h-12 rounded-full object-cover bg-gray-100 border border-gray-100 shrink-0"
        loading="lazy"
      />

      <div className="flex flex-col min-w-0">
        <h3
          className="text-base font-semibold text-gray-900 truncate"
          title={name}
        >
          {name}
        </h3>
        <p className="text-sm text-gray-500 truncate" title={email}>
          {email}
        </p>
      </div>
    </article>
  );
});

UserCard.displayName = 'UserCard';
