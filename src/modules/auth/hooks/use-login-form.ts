import { useState, type FormEvent } from 'react';

import { useLogin } from './use-login';

type LoginFormErrors = Partial<Record<'username' | 'password', string>>;

export const useLoginForm = () => {
  const { login, loading, error } = useLogin();
  const [formErrors, setFormErrors] = useState<LoginFormErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = (formData.get('username') as string)?.trim();
    const password = (formData.get('password') as string)?.trim() ?? '';

    const validationErrors: LoginFormErrors = {};
    if (!username) validationErrors.username = 'Ingresa tu usuario';
    if (!password) validationErrors.password = 'Ingresa tu contraseña';

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setFormErrors({});
    await login(username, password);
  };

  const errors = {
    ...formErrors,
    ...(error ? { password: error } : {}),
  };

  return { handleSubmit, loading, errors };
};
